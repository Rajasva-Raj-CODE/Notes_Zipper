import userModel from "../model/userModel.js";
import asyncHandler from "express-async-handler";

const registerUser= asyncHandler( async (req,res)=>{
    try {
       const { name, email, password, pic } = req.body;
       const  userExists = await userModel.findOne({email});
       if(userExists){
           res.status(400).json({success:false,message:"User already exists"})
       }
       const Newuser = await userModel.create({name,email,password,pic});
       if(Newuser){
           res.status(200).json({
            _id:Newuser._id,
            name:Newuser.name,
            email:Newuser.email,
            isAdmin:Newuser.isAdmin,
            pic:Newuser.pic,
            success:true,
            message:"User Created Successfully"
           })
       }else{
           res.status(500).json({success:false,message:"Error creating user"})   
       }

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"internal server error",registerUser})
        
    }
})

export {registerUser}