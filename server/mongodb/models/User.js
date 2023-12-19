import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true, min: 18, max: 65 },
});

const User = mongoose.model("User", userSchema);
export default User;
