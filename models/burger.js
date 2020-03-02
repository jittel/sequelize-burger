// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var burger = sequelize.define("burger", {
  
  name: Sequelize.STRING,
  devoured: Sequelize.BOOLEAN
  
}, {
  freezeTableName: true
});

// Syncs with DB
burger.sync();

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
