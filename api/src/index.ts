'use strict';

import dotenv from 'dotenv';
dotenv.config();

import express from "express";
const app = express();
const path = require("path")
const  bodyParser = require('body-parser')
const cors = require('cors');
const jwt = require('express-jwt');
const jwtDecode = require('jwt-decode');

const {handleApiError} = require('./utils/handleError');
const { NODE_ENV } = process.env;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require("./routes");
app.use('/api', routes);
app.use(handleApiError); // handle errors in routes


const PORT = (NODE_ENV === "production" || NODE_ENV === "test") ? process.env.PORT : 5000;

if (NODE_ENV === "production" || NODE_ENV === "test") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../../client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
} 

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});