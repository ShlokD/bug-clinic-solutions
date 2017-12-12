var resolve = require("path").resolve;

var bunyan = require("bunyan");
var log = bunyan.createLogger({ name: "sample" });

var scenario = require('./scenario-logging');
scenario(log, function (value) {
  log.info("value at finish is", value);
});