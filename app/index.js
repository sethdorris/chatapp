import express from "express";
const app = express();
const http = require('http').Server(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

http.listen(3000, () => {
    console.log("Wired");
});

console.log("Wired")
