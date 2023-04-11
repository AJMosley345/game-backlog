import { prisma } from "lib/db";

export default async function update(req, res) {
  const { id, name, platform, series } = req.body;

  const result = await prisma.games.update({
    where: { id },
    data: {
      name,
      platform,
      series
    },
  });

  res.json(result);
}