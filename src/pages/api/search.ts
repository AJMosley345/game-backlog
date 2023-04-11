import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "lib/db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "GET") {
        res.status(405).json({ message: "Method not allowed" });
        return;
      }
    
      const { q } = req.query;
    
      if (!q) {
        res.status(400).json({ message: "Missing query parameter 'q'" });
        return;
      }
    
      try {
        const games = await prisma.games.findMany({
          where: {
            name: {
              contains: q as string,
            },
          },
        });
    
        res.status(200).json({ games });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
}
