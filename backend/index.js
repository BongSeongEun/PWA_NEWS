const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => res.send("Hello World"));

app.listen(port, () => console.log("Listening on 8080"));

app.get("/news", (req, res) => res.send("news"));
