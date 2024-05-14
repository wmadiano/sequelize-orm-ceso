const { sq } = require("./config/db");
const models = require('./model/dbModel');

// create database tables
// it will only be executed if there are changes on the table for example new columns. otherswise no changes will be made
async function syncDatabase() {
    try {
      await sq.sync({ alter: true });
      console.log('Database tables synchronized successfully.');
    } catch (error) {
      console.error('Failed to synchronize database:', error);
    }
  }



syncDatabase();