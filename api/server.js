require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./routes");
const cors = require('cors');

const app = express();
const { NODE_ENV } = process.env;
let PORT;

app.use(cors());
app.use(express.json());
app.use('/api', routes);

if (NODE_ENV === "production" || NODE_ENV === "test") {
  PORT = NODE_ENV === "production" ? process.env.PORT : 5000;
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
} else {
  PORT = 5000;
}

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log(
    `🌲 ==> API Server now listening on PORT ${PORT} in environment ${
      process.env.NODE_ENV
    } for Project Example`
  );
});
