import { client } from "../config/redis.connect.js";
import transactionRepository from "../repositories/transactionRepository.js";

async function create(body, id) {
  if (!id) throw new Error("User id is required");
  return await transactionRepository.create({ ...body, userId: id });
}

async function findAllByUser(id) {
  if (!id) throw new Error("User id is required");
  const transactionsInCache = await client.get("transactions");
  if (transactionsInCache) return JSON.parse(transactionsInCache);
  const transactions = await transactionRepository.findAllByUser(id);
  await client.set("transactions", JSON.stringify(transactions));
  return transactions;
}

async function update(id, body, userId) {
  const isTransactionFromUser = await transactionRepository.findById(id);
  if (userId !== isTransactionFromUser.userId)
    throw new Error("You can't update a transaction that is not yours");
  return await transactionRepository.update(id, body);
}

async function remove(id, userId) {
  const isTransactionFromUser = await transactionRepository.findById(id);
  if (userId !== isTransactionFromUser.userId)
    throw new Error("You can't delete a transaction that is not yours");
  return await transactionRepository.remove(id);
}


export default { create, findAllByUser, update, remove };
