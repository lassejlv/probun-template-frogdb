import { Success } from "probun";

export async function GET(req: Request): Promise<Response> {
  return Success("Hello World");
}