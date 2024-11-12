const bunyan = require("bunyan");

exports.log = bunyan.createLogger({ name: "crypto-analyzer" });
