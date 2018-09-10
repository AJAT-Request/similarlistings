const mysql = require ('mysql');
const mysqlConfig = require ('./config.js');

const con = mysql.createConnection(mysqlConfig);

con.connect(function(err) {
  if (err) {
  	console.log(err)
  	return;
  }

  console.log('database connected!')
})

