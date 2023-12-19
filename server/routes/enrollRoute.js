import express from "express";
import Batch from "../mongodb/models/Batch.js";
import Enrollment from "../mongodb/models/Enrollment.js";
import User from "../mongodb/models/User.js";
import CompletePayment from "./CompletePayment.js";

const router = express.Router();

router.route("/").post(async (req, res) => {
  const { name, email, month, age, batch } = req.body;

  if (!name || !email || !age || !batch || !month) {
    return res.status(400).json({ message: "Missing required fields!" });
  }
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  if(!email.match(validRegex)){
    return res.status(400).json({ message: "Invalid email address!" });
  }
  
  if (age < 18 || age > 65) {
    return res.status(400).json({ message: "Age must be between 18 and 65." });
  }

    // Checking if batch exists
  const timing = await Batch.findOne({ timeSlot: batch });
  if (!timing) {
    return res.status(400).json({ message: "Invalid batch time slot." });
  }

  // Create user if doesn't exist
  let user;
  try {
    user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email, age });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error." });
  }


  // Checking if user has already enrolled for the month
  let enrollment;
  try {
    enrollment = await Enrollment.findOne({
      user: user._id,
      month: month,
    });
    if (enrollment) {
      return res
        .status(400)
        .json({
          message:
            "You cannot change the batch for an already paid month. You can change it for a different month :( ",
        });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error." });
  }

  const newEnrollment = new Enrollment({
    user: user._id,
    month: month,
    batch: timing._id,
    paymentStatus: "Pending",
  });

  await newEnrollment
    .save()
    .then(() => console.log("New enrollment saved!"))
    .catch((err) => console.log("err: " + err));

  // Mock payment function 
  const paymentResponse = CompletePayment(req.body);

  if (paymentResponse.success) {
    // Updating enrollment payment status if successful
    await Enrollment.findByIdAndUpdate(newEnrollment._id, {
      paymentStatus: "Paid",
    });
    console.log("Payment successful!");
    return res
      .status(200)
      .json({ success: true, message: "Enrollment successful!" });
  } else {
    return res
      .status(200)
      .json({ success: false, message: "Payment failed. Please try again." });
  }
});

export default router;
