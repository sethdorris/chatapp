import express from "express";
import url from 'url';
import path from 'path';
import session from 'express-session';
//const WebSocketServer = require('ws').Server;
//const http = require('http').Server(app);
//const wss = new WebSocketServer({
//    server: http
//});
const app = express();
const expressWs = require('express-ws')(app); 
app.use(express.static(path.join(__dirname, "../client"), {index: false}));
app.use(session({
    secret: "chatappsecret",
    resave: false,
    saveUninitialized: false
}));

let users = [];
let sess;

app.get('/', (req, res, next) => {
    res.sendFile(path.resolve("../index.html"), {}, 
        (err) => {
            if (err) {
                console.log("Error grabbing Index", err);
            }
        }
    );
});

app.ws('/', (ws, req) => {
    ws.on('connection', () => {
        console.log("req", req.session)
    })
})

//wss.broadcast = (data) => {
//    wss.clients.forEach((client) => {
//        client.send(JSON.stringify(data));
//    });
//};

//wss.on('connection', (ws) => {
//    ws.on('message', (message) => {
//        let messageparse = JSON.parse(message);
//        console.log(messageparse);
//        switch (messageparse.type) {
//            case "USER_CONNECTED":
//                users.push({username: messageparse.username});
//                let messageobject =  {
//                    type: "FROMSERVER_USERCONNECTED",
//                    users: users
//                }                
//                wss.broadcast(messageobject);
//                break;
//            case "SEND_MESSAGE":
//                let message = {
//                    type: "FROMSERVER_NEWMESSAGE",
//                    content: messageparse.content,
//                    sentby: messageparse.sentby
//                }
//                wss.broadcast(message);
//                break;
//            default:
//                ws.send(JSON.stringify({Error: "Could not handle your message."}))
//        }
        
//    })

//})

app.listen(3000, () => {
    console.log("Server Running");
});

//http.on('request', app);
//http.listen(3000, () => {
//    console.log("Listening on " + http.address().port);
//});

