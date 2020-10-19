require("dotenv").config();
const jwt = require("jsonwebtoken");

import { User } from "../entity/User";

const authCheck = async (token) => {
  return await jwt.verify(token, process.env.TOKEN_SECRET);
};

export default async (req, res, next) => {
  // read the token from header or url

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
    req.decoded = decoded;
    if (req.method === "POST") {
      req.body.userId = userInfo.id;
    }
    next()
  } catch (error) {
    res.status(403).json({
      hasError: true,
      message: error.message,
    });
  }
};
