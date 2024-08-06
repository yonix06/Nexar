const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

// Créer la base de données si elle n'existe pas
const dbPath = './database.db';
if (!fs.existsSync(dbPath)) {
  const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Base de données créée avec succès !');
    db.close();
  });
}

// Connecter à la base de données
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Connecté à la base de données avec succès !');
});

module.exports = db;