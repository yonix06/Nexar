const db = require('./database.js');

class DatabaseManager {
  constructor() {
    // Initialisation du gestionnaire de base de données
    this.db = db;
  }

  // Méthodes pour effectuer des opérations sur la base de données
  async createUser(name) {
    return new Promise((resolve, reject) => {
      this.db.run('INSERT INTO users (name) VALUES (?)', [name], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  }

  // Autres méthodes pour effectuer des opérations sur la base de données...
}

module.exports = DatabaseManager;