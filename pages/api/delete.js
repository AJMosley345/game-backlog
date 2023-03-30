import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function deleteGame(req, res){
    const { id } = req.body;
    
    const result = await prisma.games.delete({
        where: { id },
    });

    res.json(result);
}