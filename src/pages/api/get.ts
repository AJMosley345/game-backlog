import { prisma } from "lib/db";

export default async function get(req, res) {
    if(req.method === "GET") {
        try {
            const games = await prisma.games.findMany();
            res.status(200).json(games);
        } catch (error) {
            res.status(500).json({ error: "Error fetching games" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}