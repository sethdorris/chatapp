'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WebSocketServer = require('ws').Server;
var http = require('http').Server(app);
var wss = new WebSocketServer({
    server: http
});
var app = (0, _express2.default)();

app.use(_express2.default.static(_path2.default.join(__dirname, "../client"), { index: false }));

var users = [];

app.get('/', function (req, res, next) {
    res.sendFile(_path2.default.resolve("../index.html"), {}, function (err) {
        if (err) {
            console.log("Error grabbing Index", err);
        }
    });
});

wss.broadcast = function (data) {
    wss.clients.forEach(function (client) {
        client.send(JSON.stringify(data));
        if (client.id === "Seth") {
            console.log(client.id);
        }
    });
};

wss.on('connection', function (ws) {

    ws.on('message', function (message) {
        var messageparse = JSON.parse(message);
        console.log(messageparse);
        switch (messageparse.type) {
            case "USER_CONNECTED":
                ws.id = messageparse.username;
                users.push(messageparse.username);
                var messageobject = {
                    type: "FROMSERVER_USERCONNECTED",
                    users: users,
                    username: messageparse.username
                };
                wss.broadcast(messageobject);
                break;
            case "SEND_MESSAGE":
                var message = {
                    type: "FROMSERVER_NEWMESSAGE",
                    content: messageparse.content,
                    sentby: messageparse.sentby
                };
                wss.broadcast(message);
                break;
            default:
                ws.send(JSON.stringify({ Error: "Could not handle your message." }));
        }
    });

    ws.on('close', function () {
        for (var i = 0; i < users.length; i++) {
            if (users[i] === ws.id) {
                users.splice(i, 1);
            }
        }
        var disconnectmsg = {
            type: "FROMSERVER_USERDISCONNECT",
            content: ws.id + " has disconnected from the server.",
            sentby: "Server",
            onlineusers: users
        };
        wss.broadcast(disconnectmsg);
    });
});

http.on('request', app);
http.listen(3000, function () {
    console.log("Listening on " + http.address().port);
});