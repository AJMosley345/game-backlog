import prisma from "../../../lib/prisma";

export default async function deleteGame(req, res){
    const gameId = req.query.id;
    if (req.method === 'DELETE'){
        const result = await prisma.games.delete({
            where: { id: gameId },
        });
        res.json(result);
    }
}