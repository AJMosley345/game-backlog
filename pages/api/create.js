import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function create(req, res){
    const { name, platform, series } = req.body;
    
    const result = await prisma.games.create({
        data: {
            name,
            platform,
            series
        },
    });

    res.json(result);
}