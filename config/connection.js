// Set up MySQL connection.
var mysql = require("mysql");
var Sequelize = require("sequelize");

var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  console.log ("going local");
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123456789",
    database: "burger_db"
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

var sequelize = new Sequelize(
  "burger_db", 
  "root", 
  "123456789", 
  {
      host: "localhost",
      port: 3306,
      dialect: "mysql",
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
  }
);

// Export connection for our ORM to use.
module.exports = sequelize;
