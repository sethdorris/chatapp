import express from "express";
import url from 'url';
import path from 'path';
const WebSocketServer = require('ws').Server;
const http = require('http').Server(app);
const wss = new WebSocketServer({
    server: http
});
const app = express();
app.use(express.static(path.resolve('../')));

let users = [];

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
    console.log("Client Length", wss.clients);
    ws.on('message', (message) => {
        let messageparse = JSON.parse(message);
        
        switch (messageparse.type) {
            case "USER_CONNECTED":
                users.push({username: messageparse.username});
                console.log(users);
                ws.send(JSON.stringify(users));
                break;
            case "SEND_MESSAGE":

                break;
            default:
                ws.send(JSON.stringify({Error: "Could not handle your message."}))
        }
        
    })

})

http.on('request', app);
http.listen(3000, () => {
    console.log("Listening on " + http.address().port);
});

