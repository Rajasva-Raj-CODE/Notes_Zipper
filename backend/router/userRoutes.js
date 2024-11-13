import express from "express"
import { registerUser } from "../controllers/userControllers.js"


const router = express.Router()


router.post("/post",registerUser)


export default router;

