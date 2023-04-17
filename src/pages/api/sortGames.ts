import prisma from "lib/prisma";

export default async function handler(req, res){
    const { sortOption } = req.query;

    let games = await prisma.games.findMany();
  
    if (sortOption === 'name') {
      games = games.sort((a, b) => {
        console.log(`Sorting by name: a.name=${a.name}, b.name=${b.name}`);
        return a.name.localeCompare(b.name);
      });
    } else if (sortOption === 'platform') {
      games = games.sort((a, b) => {
        console.log(`Sorting by platform: a.platform=${a.platform}, b.platform=${b.platform}`);
        return a.platform.localeCompare(b.platform);
      });
    } else if (sortOption === 'series') {
      games = games.sort((a, b) => {
        console.log(`Sorting by series: a.series=${a.series}, b.series=${b.series}`);
        return a.series.localeCompare(b.series);
      });
    }
  
    console.log('Sorted games:', games);
  
    res.status(200).json(games);
}