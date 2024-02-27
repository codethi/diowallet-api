import express, { json } from "express";
import authRouter from "./routes/authRoutes.js";
import transactionRouter from "./routes/transactionRoutes.js";
import { connectDb } from "./config/database.js";
import cors from "cors";
import { client } from "./config/redis.connect.js";

const app = express();

connectDb();
app.use(json());
app.use(cors());
app.use(authRouter);
app.use("/transactions", transactionRouter);

const port = process.env.PORT;

async function main() {
  await client.connect();
  app.listen(port, () => console.log(`Server listening in port ${port}`));
}

main();
