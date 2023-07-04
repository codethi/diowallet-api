import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const transactionRouter = Router();

transactionRouter.post(
  "/transactions",
  authMiddleware,
  transactionController.create
);

export default transactionRouter;
