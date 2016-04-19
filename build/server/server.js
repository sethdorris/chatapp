'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WebSocketServer = require('ws').Server;
var http = require('http').Server(app);
var wss = new WebSocketServer({ server: http });
var app = (0, _express2.default)();

app.use(function (req, res) {
    res.send({ msg: "hello" });
});

app.get('/', function (req, res) {
    res.sendFile("index.html");
});

wss.on('connection', function connection(ws) {
    var location = _url2.default.parse(ws.upgradeReq.url, true);

    console.log(location);

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('something');
});

http.on('request', app);
http.listen(3000, function () {
    console.log("Listening on " + http.address().port);
});

console.log("Wired");