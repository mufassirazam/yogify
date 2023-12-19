import moongoose from "mongoose";

const connectDB = () => {
  moongoose.set("strictQuery", true);
  moongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

export default connectDB;