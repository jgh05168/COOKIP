const mysql = require('mysql');
const cc = require('kleur');

const db = mysql.createConnection({
  host: "i10c101.p.ssafy.io",
  port: "3306",
  user: "cookip",
  password: "0000",
  database: "coo",
});

db.connect((err) => {
  if(err) throw err.message;
  console.log(cc.green('Database Connected!'));
})


module.exports = db;