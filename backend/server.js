const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(express.json());
app.use(cors());

const corsOptions = {
	origin: ["http://localhost:3000", "http://localhost:8081"],
	optionsSuccessStatus: 200,
	methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
	headers: "Content-Type, Authorization",
	credentials: true,
};

app.use(cors(corsOptions));

const database = mysql.createConnection({
	host: "localhost",
	port: 8889,
	user: "root",
	password: "root",
	database: "crudnode",
});

app.get("/", (req, res) => {
	const sql = "SELECT * FROM students";
	database.query(sql, (err, data) => {
		if (err) return res.json("Error");
		return res.json(data);
	});
});

app.post("/create", (req, res) => {
	const sql = "INSERT INTO  students (`name`, `email`) VALUES (?)";
	const values = [req.body.name, req.body.email];
	database.query(sql, [values], (err, data) => {
		if (err) return res.json("Error");
		return res.json(data);
	});
});

app.put("/update/:id", (req, res) => {
	const sql = "UPDATE students SET `name` = ?, `email` = ? WHERE id = ?";
	const values = [req.body.name, req.body.email];
	const id = req.params.id;
	database.query(sql, [...values, id], (err, data) => {
		if (err) return res.json("Error");
		return res.json(data);
	});
});

app.delete("/student/:id", (req, res) => {
	const sql = "DELETE FROM students WHERE id = ?";
	const id = req.params.id;
	database.query(sql, [id], (err, data) => {
		if (err) return res.json("Error");
		return res.json(data);
	});
});

app.listen(8081, () => {
	console.log("Server is running on port 8081");
});
