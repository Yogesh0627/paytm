import express from "express";
import zod from "zod";
import Jwt from "jsonwebtoken";
import { router } from "./Router/index.js";
import cors from "cors";
import dotenv from "dotenv"
import { userRouter } from "./Router/user.js";

const app = express();


app.use(express.json());
app.use(cors());

app.use("/api/v1", router);


app.listen(3000, () => {
  console.log("server running");
});
