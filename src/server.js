import express, { json } from "express";
import authRouter from "./routes/authRoutes.js";
import { connectDb } from "./config/database.js";

const app = express();

connectDb();
app.use(json());
app.use(authRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server listening in port ${port}`));
