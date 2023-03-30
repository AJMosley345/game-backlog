import db from './db';

export function getAllGames() {
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

export function getGameById(id) {
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

export function addGame(name, email, phone) {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO games (name, email, phone) VALUES (?, ?, ?)', [name, email, phone], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
}

export function updateGame(id, name, email, phone) {
  return new Promise((resolve, reject) => {
    db.query('UPDATE games SET name = ?, email = ?, phone = ? WHERE id = ?', [name, email, phone, id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.changedRows);
      }
    });
  });
}

export function deleteGame(id) {
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
