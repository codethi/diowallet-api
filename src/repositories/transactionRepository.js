import TransactionSchema from "../schemas/Transaction.js";

async function create(data) {
  return TransactionSchema.create(data);
}

async function findAllByUser(id) {
  return await TransactionSchema.find({ userId: id });
}

async function update(id, data) {
  return await TransactionSchema.updateOne({ _id: id }, data);
}

async function remove(id) {
  return await TransactionSchema.deleteOne({ _id: id });
}

async function findById(id) {
  return await TransactionSchema.findById(id);
}

export default { create, findAllByUser, update, remove, findById };
