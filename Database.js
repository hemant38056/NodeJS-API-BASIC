const mysql =require('mysql');

const mysql_obj = mysql.createPool({
    host : 'localhost',
    database : 'india',
    user : 'root',
    password : 'root',
    multipleStatements : true
})

module.exports = mysql_obj;