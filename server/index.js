const app = require("./app");
const mongoose = require("mongoose");
const config = require("./config");

const dbUrl = process.env.CONNECTION_URL || config.db.prod;
const port = process.env.PORT || config.port || 8080;

const connect = url => {
  return mongoose.connect(url, config.db.options);
};

if (require.main === module) {
  // Use '0.0.0.0' so the EC2 can route traffic to the container
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
  });

  connect(dbUrl)
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => {
      console.log("MongoDB Connection Error Details:", err);
      process.exit(1); // Stop the container if DB fails
    });

  mongoose.connection.on('error', console.log);
}

module.exports = { connect };
