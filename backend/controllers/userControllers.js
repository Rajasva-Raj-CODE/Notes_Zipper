import userModel from "../model/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";


const registerUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password, pic } = req.body;
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      res.status(400).json({ success: false, message: "User already exists" });
    }
    const Newuser = await userModel.create({ name, email, password, pic });
    if (Newuser) {
      res.status(200).json({
        _id: Newuser._id,
        name: Newuser.name,
        email: Newuser.email,
        isAdmin: Newuser.isAdmin,
        pic: Newuser.pic,
        token: generateToken(Newuser._id),
        success: true,
        message: "User Created Successfull",
      });
    } else {
      res.status(500).json({ success: false, message: "Error creating user" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "internal server error", registerUser });
  }
});

const aurthorizeUser = asyncHandler(async (req, res) => {
  const {email,password} = req.body
  const user= await userModel.findOne({email})
  if(user && (await user.matchPassword(password))){
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
      success: true,
      message: "User Logged In Successfully",
    });
  }
  else{
    res.status(400).json({
      success: false,
      message: "Invalid Credentials",
    });
  }
});
export { registerUser, aurthorizeUser };
