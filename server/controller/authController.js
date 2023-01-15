import User from "../models/userModel.js";

//User Signup
export const authSignup = async (req, res) => {
  try {
    const findUsername = await User.findOne({ username: req.body.username });
    if (findUsername) {
      return res
        .status(401)
        .json({ status: "failed", message: "username already exists!" });
    }
    const newUser = new User(req.body);
    await newUser.save();
    res
      .status(200)
      .json({ status: "success", message: "signup successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//User Login
export const authLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const findUser = await User.findOne({ username, password });
    if (!findUser) {
      return res
        .status(404)
        .json({ status: "failed", message: "user not found" });
    }
    res.status(200).json({ status: "success", message: "login successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
