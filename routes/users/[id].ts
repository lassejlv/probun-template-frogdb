import { Failure, SendJSON, param, query } from "probun";
import type { User } from "../../db/types/User";
import UserSchema from "../../schemas/User";

export async function GET(req: Request): Promise<Response> {
  const id = await param(req)
  const user = await UserSchema.findOne<User>({ id })
  const password = await query("password", req)
  if (!password) return Failure("Please provide a password in the query")
  

  if (!user) {
    return Failure("User not found", 404);
  } 

  const verifyPassword = await Bun.password.verify(password, user.password)
  if (!verifyPassword) return Failure("Invalid password provided")

  return SendJSON(user)
}