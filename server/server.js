import express from "express";
import url from 'url';
const WebSocketServer = require('ws').Server;
const http = require('http').Server(app);
const wss = new WebSocketServer({server: http});
const app = express();


app.use((req, res) => {
    res.send({msg: "hello"})
});

app.get('/', (req, res) => {
    res.sendFile("index.html");
});

wss.on('connection', function connection(ws) {
    let location = url.parse(ws.upgradeReq.url, true)

    console.log(location);

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('something');
})

http.on('request', app);
http.listen(3000, () => {
    console.log("Listening on " + http.address().port);
});

console.log("Wired")
