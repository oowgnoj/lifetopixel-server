require("dotenv").config();
const jwt = require("jsonwebtoken");

import { User } from "../entity/User";

export default async (req, res, next) => {
  // read the token from header or url

  const authCheck = async (token) => {
    return await jwt.verify(token, process.env.TOKEN_SECRET);
  };

  const token = req.headers["x-access-token"];
  // token does not exist
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "not logged in",
    });
  }

  try {
    // @ts-ignore
    const decoded = await authCheck(token);
    const userInfo = await User.findOne({ email: decoded.uid });
    req.decoded = userInfo;
    if (req.method === "POST") {
      req.body.decoded = userInfo;
    }
    next();
  } catch (error) {
    res.status(403).json({
      hasError: true,
      message: error.message,
    });
  }
};

// declare namespace
declare global {
  namespace Express {
    interface Request {
      decoded: User;
    }
  }
}
