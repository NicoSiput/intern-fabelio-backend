const mysql = require("mysql2");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_fabelio",
});

con.connect((err) => {
  if (err) throw err;
});
module.exports = con;
