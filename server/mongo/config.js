const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://read-only:mlabreadonly@hifdth-track.x6ijp.mongodb.net/vue-shop",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
); // connect to our database

// db.on('error', console.error.bind(console, 'connection error:'));
const db = mongoose.connection;
db.once("open", () => console.info("Connected to MongoDB Sample"));
db.on("error", console.error.bind(console, "connection error:"));

module.exports = mongoose;
