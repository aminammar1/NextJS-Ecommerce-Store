import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.use(express.json());

app.use(cookieParser());

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ sucess: false, statusCode, message });
});
