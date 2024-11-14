import express from "express";
import { notes } from "./utils/data.js"
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import routers from "./router/userRoutes.js";


dotenv.config();

const app = express();

connectDB();

app.use(express.json());


app.use("/api/user",routers)



const PORT =process.env.PORT || 5000;
app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`);
});
