import mongoose from "mongoose";
// import bcrypt from "bcrypt js";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin:{
    type:Boolean,
    default:false,
    required:true,
  },
  password: {
    type: String,
    required: true,
  },
  pic:{
    type:String,
    required:true,
    default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
},{timestamps:true});

const userModel =  mongoose.model("User", userSchema);
export default userModel;