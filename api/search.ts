import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
import "dotenv/config";
import cors from "cors";

const corsHandler = cors({ origin: true });

const SEARCH_RECIPE_API_KEY = process.env.SEARCH_RECIPE_API_KEY;
const SEARCH_RECIPE_API_URL = process.env.SEARCH_RECIPE_API_URL;

export default async function handler(request: VercelRequest, response: VercelResponse) {
  corsHandler(request, response, async () => {
    const { name, skip, limit } = request.body;
    try {
      const res = await axios.request({
        method: "POST",
        maxBodyLength: Infinity,
        headers: {
          "Content-Type": "application/json",
          "x-api-key": SEARCH_RECIPE_API_KEY,
        },
        data: JSON.stringify({
          name: name,
          skip: skip,
          limit: limit,
        }),
        url: `${SEARCH_RECIPE_API_URL}/bettermenu/search`,
      });

      if (!res.status) {
        throw new Error("Network response was not ok");
      }
      const data = await res.data;
      return response.status(200).json(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error.message);
      return response.status(500).json({ error: error.message });
    }
  });
}
