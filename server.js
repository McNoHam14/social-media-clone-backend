import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use(cors());

const startServer = async () => {
  await mongoose
    .connect
    // "MONGO DB URL"
    ();
  app.listen(5000, () => console.log("server is started"));
};

startServer();
