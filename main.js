var http = require("http");
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');
const { Pool } = require('pg')

//MySQL connection
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'network'`1a
// });

const mariadb = require("mariadb");

//Initialize Pool
const pool = mariadb.createPool({
   host: "103.138.88.30",
   user: "qua86729_admin",
   password: "12345678x@X",
   database: "qua86729_quanlytonylemobile",
   connectionLimit: 100,
});


// var connectionString =
//     'postgres://lbrsclmcfwkqcn:f6c3900d0dda5a04eeea472dc8bdf6433e3bfa41e29a6f369e02009fb55ea39b@ec2-52-3-130-181.compute-1.amazonaws.com:5432/d1egjuesjikjrp'

app.use(cors());




// const pool = new Pool({ connectionString,ssl: {
//     rejectUnauthorized: false
//   } })

module.exports = { pool }

//Body-parser configuration
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

//Create node.js Server
// var server = app.listen(3000, "127.0.0.1", function () {

//     var host = server.address().address
//     var port = server.address().port

//     console.log("Example app listening at http://%s:%s", host, port)

// });

var server = app.listen(process.env.PORT || 3001);


//authen


//get all user
app.get('/getall/', function (req, res) {
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json");
    console.log(req);
    pool.query('select * from test', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results.rows));
    });
});

