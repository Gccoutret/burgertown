
//set up connection to mySQL
var mysql = require("mysql");

require('dotenv').config()

var connection = mysql.createConnection(process.env.JAWSDB_URL ||
  {
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.pass,
  database: "burger_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;