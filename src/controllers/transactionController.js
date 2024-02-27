import transactionService from "../services/transactionService.js";

async function create(req, res) {
  const body = req.body;
  const { _id: id } = res.locals.user;

  try {
    const transaction = await transactionService.create(body, id);
    return res.status(201).send(transaction);
  } catch (err) {
    return res.status(409).send(err.message);
  }
}

async function findAllByUser(req, res) {
  const { _id: id } = res.locals.user;

  try {
    const transactions = await transactionService.findAllByUser(id);
    return res.send(transactions);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

async function update(req, res) {
  const { id } = req.params;
  const { _id: userId } = res.locals.user;
  const body = req.body;

  try {
    await transactionService.update(id, body, userId);
    return res.send();
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

async function remove(req, res) {
  const { id } = req.params;
  const { _id: userId } = res.locals.user;

  try {
    await transactionService.remove(id, userId);
    return res.send();
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

export default { create, findAllByUser, update, remove };
