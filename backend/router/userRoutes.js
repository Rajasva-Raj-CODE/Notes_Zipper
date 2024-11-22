import express from "express"
import { registerUser,aurthorizeUser } from "../controllers/userControllers.js"


const router = express.Router()


router.post("/post",registerUser)
router.post("/login",aurthorizeUser)


export default router;

