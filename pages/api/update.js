import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function update(req, res) {
  const { id, name, platform, series } = req.body;

  const result = await prisma.game.update({
    where: { id },
    data: {
      name,
      platform,
      series
    },
  });

  res.json(result);
}