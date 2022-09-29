const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/me", (req, res) => {
	res.status(200).json({ name: "mi peticion post", age: 26, country: "PE" });
});

app.post("/metas", (req, res) => {
	res.status(200).json({
		hobbie1: "to read",
		hobbie2: "to listen music",
		hobbie3: "to visit the sea",
	});
});

app.patch("/metas", (req, res) => {
	res.status(200).json({
		meta1: "improve in programming",
		meta2: "learn more languages",
	});
});

app.put("/business", (req, res) => {
	res.status(200).json({
		company1: "Microsoft",
		company2: "Airbnb",
		company3: "create my company",
	});
});

app.listen(PORT, () => {
	console.log(`Srver started at http://localhost:${PORT}`);
});
