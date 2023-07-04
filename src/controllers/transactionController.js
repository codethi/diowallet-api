import transactionService from "../services/transactionService.js";

async function create(req, res) {
  const body = req.body;
  const { _id: id } = res.locals.user;

  try {
    const transaction = await transactionService.create(body, id);
    return res.status(201).send(transaction);
  } catch (err) {
    res.status(409).send(err.message);
  }
}

export default { create };
