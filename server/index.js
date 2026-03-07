const app = require("./app");
const mongoose = require("mongoose");
const config = require("./config");

const dbUrl = process.env.CONNECTION_URL || config.db.prod;
const port = process.env.PORT || config.port || 8080;

const connect = url => {
  return mongoose.connect(url, config.db.options);
};

if (require.main === module) {
  app.listen(config.port);
  connect(config.db.prod);
  mongoose.connection.on('error', console.log);
}

module.exports = { connect };

