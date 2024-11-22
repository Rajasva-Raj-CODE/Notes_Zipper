import express from "express";
import { notes } from "./utils/data.js"
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import routers from "./router/userRoutes.js";
import { notFound,errorHandler } from "./middlewares/errorMiddleware.js";


dotenv.config();

const app = express();

connectDB();

app.use(express.json());


app.use("/api/user",routers)

app.use(notFound);
app.use(errorHandler);

const PORT =process.env.PORT || 5000;
app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`);
});
