import express from "express";
import url from 'url';
import path from 'path';
const WebSocketServer = require('ws').Server;
const http = require('http').Server(app);
const wss = new WebSocketServer({server: http});
const app = express();

app.use(express.static(path.resolve('../')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve("../index.html"), {}, 
        (err) => {
            if (err) {
                console.log("Error grabbing Index", err);
            }
        }
    );
});

wss.on('connection', (ws) => {

    ws.on('message', (message) => {
        console.log("Message data", JSON.parse(message))
        ws.send(JSON.stringify({message: "hello"}))
        ws.send(JSON.stringify(message.data));
        
    })
})

http.on('request', app);
http.listen(3000, () => {
    console.log("Listening on " + http.address().port);
});

