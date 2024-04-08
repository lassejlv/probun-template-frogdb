import { Failure, SendJSON } from "probun";
import type { User } from "../../db/types/User";
import UserSchema from "../../schemas/User";

export async function GET(req: Request): Promise<Response> {
  const users = await UserSchema.find<User[]>({})

  if (users.length < 1) {
    return Failure("No users found :(", 404)
  } else {
    
    const UsersFormatted = users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        age: user.age,
      }
    })

    return SendJSON(UsersFormatted)
  }
}

export async function POST(req: Request): Promise<Response> {
  const body: User = await req.json()

  if (!body.name || !body.email || !body.password || !body.age) {
    return Failure("Missing required fields");
  } else {
    const newUser = await UserSchema.insert<User>({
      name: body.name,
      email: body.email,
      password: await Bun.password.hash(body.password),
      age: body.age,
    });

    return SendJSON(newUser);
  }
}
