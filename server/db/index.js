var mysql = require('mysql');

exports.connection = mysql.createConnection({
  host : 'HRW4-06.local',
  user : 'root',
  password : '',
  database : 'chat'
});
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


