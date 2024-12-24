import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const verifyUser = async (req, res, next) => {
  const token = req.cookies.access_toke;

  if (!token) return errorHandler(401, "unauthorized ");
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return errorHandler(403, "Token is not valid");
    req.user = user;
    next();
  });
};
