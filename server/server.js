import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import pino from "pino";
import pinoHttp from "pino-http";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      levelFirst: true,
      translateTime: "HH:MM:ss",
      ignore: "pid,hostname",
    },
  },
});

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    logger.info("DB connected");
  })
  .catch((error) => {
    logger.error(error, "DB connection error");
  });

const app = express();

app.use(pinoHttp({ logger }));

app.use(express.json());
app.use(cookieParser());

app.listen(4000, () => {
  logger.info("Server is running on port 4000");
});

app.use("/api/auth", authRoutes);


app.use((err, req, res, next) => {
  req.log.error(err, "Unhandled error");
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ success: false, statusCode, message });
});
