// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get(/^\/dan(\/.*|$)$/, function(req, res) {
  res.redirect(302, 'http://' + process.env.DAN_ENDPOINT + req.params[0]);
});

app.get(/^\/steve(\/.*|$)$/, function(req, res) {
  res.redirect(302, 'http://' + process.env.STEVE_ENDPOINT + req.params[0]);
});

app.get(/^(.*)$/, function(req, res) {
  res.redirect(302, 'http://' + process.env.STEVE_ENDPOINT + req.params[0]);
});

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
  console.log("Listening on " + port);
});