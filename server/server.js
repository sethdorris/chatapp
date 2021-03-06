import express from "express";
import url from 'url';
import path from 'path';
const WebSocketServer = require('ws').Server;
const http = require('http').Server(app);
const wss = new WebSocketServer({
    server: http
});
const app = express();

app.use(express.static(path.join(__dirname, "../client"), {index: false}));

let users = [];

app.get('/', (req, res, next) => {
    res.sendFile(path.resolve("../index.html"), {}, 
        (err) => {
            if (err) {
                console.log("Error grabbing Index", err);
            }
        }
    );
});

wss.broadcast = (data) => {
    wss.clients.forEach((client) => {
        client.send(JSON.stringify(data));
        if (client.id === "Seth") {
            console.log(client.id)
        }
    });
};

wss.on('connection', (ws) => {

    ws.on('message', (message) => {
        let messageparse = JSON.parse(message);
        console.log(messageparse);
        switch (messageparse.type) {
            case "USER_CONNECTED":
                ws.id = messageparse.username;
                users.push(messageparse.username);
                let messageobject =  {
                    type: "FROMSERVER_USERCONNECTED",
                    users: users,
                    username: messageparse.username
                }                
                wss.broadcast(messageobject);
                break;
            case "SEND_MESSAGE":
                let time = new Date();
                let cHr = time.getUTCHours() - (time.getTimezoneOffset() / 60);
                let cMin = time.getUTCMinutes();
                if (cMin < 10) {
                    cMin = "0" + cMin;
                }
                let message = {
                    type: "FROMSERVER_NEWMESSAGE",
                    content: messageparse.content,
                    sentby: messageparse.sentby,
                    timestamp: `[${cHr}:${cMin}]`
                }
                console.log(message.timestamp)
                wss.broadcast(message);
                break;
            default:
                ws.send(JSON.stringify({Error: "Could not handle your message."}))
        }  
    });

    ws.on('close', () => {
        for (let i = 0; i < users.length; i++) {
            if (users[i] === ws.id) {
                users.splice(i, 1);
            }
        } 
        let disconnectmsg = {
            type: "FROMSERVER_USERDISCONNECT",
            content: ws.id + " has disconnected from the server.",
            sentby: "Server",
            onlineusers: users
        }
        wss.broadcast(disconnectmsg)
    });
});

http.on('request', app);
http.listen(3000, () => {
    console.log("Listening on " + http.address().port);
});

