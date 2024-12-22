import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";


const isLogin = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
          return res.status(401).json({
            message: "Unauthorize : No token provided",
          });
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decode.userId);
    
        if (!user) {
          return res.status(401).json({
            success: false, 
            message: "Unauthorize : user not found",
          });
        }
       req.user = user
        next();
      } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
          });
      }
}

export default isLogin;
