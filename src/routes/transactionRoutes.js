import { Router } from "express";
import transactionController from "../controllers/transactionController.js";

const transactionRouter = Router();

transactionRouter.post("/transactions", transactionController.create);

export default transactionRouter;
