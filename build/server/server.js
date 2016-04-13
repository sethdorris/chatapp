'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var http = require('http').Server(app);

app.get('/', function (req, res) {
    res.sendFile("index.html");
});

http.listen(3000, function () {
    console.log("Wired");
});

console.log("Wired");