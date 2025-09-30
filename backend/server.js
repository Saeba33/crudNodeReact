const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");



const corsOptions = {
	origin: ["http://localhost:3000", "http://localhost:8081"],
	optionsSuccessStatus: 200,
	methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
	headers: "Content-Type, Authorization",
	credentials: true,
};

const database = mysql.createConnection({
	host: "localhost",
	port: 8889,
	user: "root",
	password: "root",
	database: "crudnode",
});

app.get("/", (req, res) => {
	const sql= "SELECT * FROM students";
    database.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data)
    })
});


app.listen(8081, () => {
	console.log("Server is running on port 8081");
});