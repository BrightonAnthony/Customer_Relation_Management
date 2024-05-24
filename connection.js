const express = require("express");
const mysql = require("mysql2");

const connection = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'brighton',
    password: 'bri123',
    database: 'crm'
});

db.connect((error) => {
    if(error){
        console.log(error)
    }
    else{
        console.log("Connection Successfull...")
    }
})

connection.get("/", (req,res) => {
    res.sendfile(__dirname+"/index.html")
});

connection.listen(5000,() =>{
    console.log("server started");
})