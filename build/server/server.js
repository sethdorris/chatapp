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

app.use(_express2.default.static(_path2.default.resolve('../')));

var users = [];
var currentUser = null;

app.get('/', function (req, res) {
    res.sendFile(_path2.default.resolve("../index.html"), {}, function (err) {
        if (err) {
            console.log("Error grabbing Index", err);
        }
    });
});

wss.on('connection', function (ws) {

    ws.on('message', function (message) {
        var messageparse = JSON.parse(message);

        switch (messageparse.type) {
            case "USER_CONNECTED":
                users.push({ username: messageparse.username, id: users.length });
                console.log(users);
                ws.send(JSON.stringify(users));
                currentUser = users[users.length - 1].id;
                break;
        }
    });
});

http.on('request', app);
http.listen(3000, function () {
    console.log("Listening on " + http.address().port);
});