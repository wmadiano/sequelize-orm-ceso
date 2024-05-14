const { sq } = require("./config/db");
const models = require('./model/dbModel');

// create database tables
async function syncDatabase() {
    try {
      await sq.sync({ alter: true });
      console.log('Database tables synchronized successfully.');
    } catch (error) {
      console.error('Failed to synchronize database:', error);
    }
  }



syncDatabase();