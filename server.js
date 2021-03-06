const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;
// const server = require('http').Server(app);
// var io = require('socket.io')(server);



// Body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes for API and views
app.use(routes);

// Mongo
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portflowio",
  {
    useMongoClient: true
  }

);

// io.on('connection', (client)=> {
//   client.on('likenotify', (notifylike) {
//   console.log('client likes', notifylike);
//   client.emit('liked')});
//
//   });

// Start the API server
app.listen(PORT, () =>
  console.log(`🤓 ✌️ ==> API Server now listening on PORT ${PORT}!`)
);
