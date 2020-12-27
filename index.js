const http = require("http");
const https = require("https");
const fs = require("fs");

var options = require("./options.js");
var main = require("./main.js");

var cl = console.log;
if(options.serverproticals.http.on == true){
httpServer = http.createServer(eval(options.serverproticals.http.app)).listen(options.serverproticals.http.port,options.serverproticals.http.ip||"0.0.0.0")
}
if(options.serverproticals.https.on == true){
httpsServer = https.createServer(options.serverproticals.https.options,eval(options.serverproticals.https.app)).listen(options.serverproticals.http.port,options.serverproticals.http.ip||"0.0.0.0")
}

