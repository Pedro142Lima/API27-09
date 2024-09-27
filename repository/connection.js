

import mysql from 'mysql2/promise.js'

const con = mysql.createPool({
    user: process.env.MYSQL_USER,
    host: process.env.MYSQL_HOST,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB    

})

console.log('--> Db subiu nos D');

export default con;