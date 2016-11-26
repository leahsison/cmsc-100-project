'use strict'

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cmsc100db'
});

connection.on('ready', function(){
  console.log('Connected to Database');
})

module.exports = connection;