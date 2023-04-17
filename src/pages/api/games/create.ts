import { prisma } from "lib/db";

export default async function create(req, res){
    const { name, platform, series } = req.body;
    
    const result = await prisma.games.create({
        data: {
            name: name,
            platform: platform,
            series: series,
            createdAt: new Date(),
            updatedAt: new Date()
        },
    });
    res.json(result);
}