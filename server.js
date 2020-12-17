const express = require("express");

const path = require("path");
const app = express();

app.get("/api", (req, res) => {
	res.json({
		id: 1,
		name: "vj"
	});
});

app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("/fe/*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});


app.listen(5000, () => console.log("server is up"));