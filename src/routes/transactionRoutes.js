import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";
import { CreateTransaction } from "../schemas/validation/CreateTransaction.js";

const transactionRouter = Router();

transactionRouter.use(authMiddleware);

transactionRouter.post(
  "/",
  validationSchemaMiddleware(CreateTransaction),
  transactionController.create
);
transactionRouter.get("/", transactionController.findAllByUser);
transactionRouter.put("/:id", transactionController.update);
transactionRouter.delete("/:id", transactionController.remove);

export default transactionRouter;
