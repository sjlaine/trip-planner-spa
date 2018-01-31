const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner');
const seedData = require('../server/seed-ny.js');

module.exports = { db, seedData };
