const mysql = require ('mysql');
const mysqlConfig = require ('./config.js');

const con = mysql.createConnection(mysqlConfig);
  con.connect(function(err) {
    if (err) {
  	  console.log(err)
    }

    console.log('database connected')
})

module.exports = con;