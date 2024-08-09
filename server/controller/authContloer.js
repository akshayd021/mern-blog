import authModel from "../models/auth";
import bcryptjs from "bcryptjs";
class AuthController {
  static userRegistation = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      if (name && email && password) {
        const isUser = await authModel.findOne({ email: email });
        if (!isUser) {
          const genSalt = await bcryptjs.genSalt(10);
          const hasPass = await bcryptjs.hash(password, genSalt);

          const newUser = new authModel({
            name,
            email,
            password,
          });

          const saveUser = newUser.save();
        }
      } else {
        return res.status(400).json({ message: "all filed are required" });
      }
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
    res.send("user registration");
  };
  static userLogin = async (req, res) => {
    res.send("user login");
  };
}

export default AuthController;
