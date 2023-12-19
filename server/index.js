import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import bodyParser from "body-parser";
import enrollRoute from "./routes/enrollRoute.js";

const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(cors());

app.use("/api/enroll", enrollRoute);
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});


try {
  connectDB();
  app.listen(process.env.PORT, () =>
    console.log(`Server listening on port ${process.env.PORT}`)
  );
} catch (error) {
  console.log(error);  
}


