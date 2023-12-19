import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  batch: { type: mongoose.Schema.Types.ObjectId, ref: "Batch", required: true },
  month: { type: String, required: true },
  paymentStatus: {
    type: String,
    enum: ["Pending", "Paid"],
    default: "Pending",
  },
});

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

export default Enrollment;