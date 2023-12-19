// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   age: { type: Number, required: true, min: 18, max: 65 },
//   password: { type: String, required: true },
// });

// const batchSchema = new mongoose.Schema({
//   timeSlot: { type: String, required: true, unique: true },
// });

// const enrollmentSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   batch: { type: mongoose.Schema.Types.ObjectId, ref: "Batch", required: true },
//   month: { type: String, required: true },
//   paymentStatus: {
//     type: String,
//     enum: ["Pending", "Paid"],
//     default: "Pending",
//   },
// });

// const User = mongoose.model("User", userSchema);
// const Batch = mongoose.model("Batch", batchSchema);
// const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

// export default { User, Batch, Enrollment };
