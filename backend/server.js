import express from "express";
import { notes } from "./data/data.js";
import dotenv from "dotenv";
import connectDB from "./database/db.js";



dotenv.config();

const app = express();

connectDB();


app.get("/api/notes", (req, res) => {
  res.send(notes);
});

const PORT =process.env.PORT || 5000;
app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`);
});
