import UserSchema from "../schemas/User.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

async function create(data) {
  return await UserSchema.create(data);
}

async function findByEmail(email) {
  const user = await UserSchema.findOne({ email });
  return user;
}

async function generateToken(id) {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: 86400 });
}

export default { create, findByEmail, generateToken };
