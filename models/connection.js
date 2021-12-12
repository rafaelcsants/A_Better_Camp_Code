var mysql = require("mysql");
var util = require("util");

var pool = mysql.createPool({
  connectionLimit: 50,
  host: "remotemysql.com",
  user: "BKIeZjBNy6",
  password: "esaI175dBl",
  database: "BKIeZjBNy6",
  port: 3306,
});

pool.query = util.promisify(pool.query);

module.exports = pool;
