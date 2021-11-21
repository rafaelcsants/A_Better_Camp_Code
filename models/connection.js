var mysql = require("mysql");
var util = require("util");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "remotemysql.com",
  port: "3306",
  user: "BKIeZjBNy6",
  password: "esaI175dBl",
  database: "BKIeZjBNy6",
});

pool.query = util.promisify(pool.query);

module.exports = pool;
