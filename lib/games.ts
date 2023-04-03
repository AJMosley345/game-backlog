import db from './db';

interface Game {
  id: number;
  name: string;
  platform: string;
  series: string;
}

export function getAllGames(): Promise<Game[]> {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM games', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

export function getGameById(id: number): Promise<Game> {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM games WHERE id = ?', [id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
}

export function addGame(name: string, platform: string, series: string): Promise<number> {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO games (name, platform, series) VALUES (?, ?, ?)', [name, platform, series], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
}

export function updateGame(id: number, name: string, platform: string, series: string): Promise<number> {
  return new Promise((resolve, reject) => {
    db.query('UPDATE games SET name = ?, platform = ?, series = ? WHERE id = ?', [name, platform, series, id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.changedRows);
      }
    });
  });
}

export function deleteGame(id: number): Promise<number> {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM games WHERE id = ?', [id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows);
      }
    });
  });
}
