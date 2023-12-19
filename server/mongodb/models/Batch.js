import mongoose from "mongoose";
const batchSchema = new mongoose.Schema({
  timeSlot: { type: String, required: true, unique: true },
});
const Batch = mongoose.model("Batch", batchSchema);
export default Batch;