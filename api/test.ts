import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(request: VercelRequest, response: VercelResponse) {
  console.log(handler);
  response.status(200).json("hey");
}
