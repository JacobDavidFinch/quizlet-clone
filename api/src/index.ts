'use strict';
import dotenv from 'dotenv';
dotenv.config();
const { NODE_ENV } = process.env;
console.log(NODE_ENV);

import express from "express";
import path from "path";
import bodyParser from 'body-parser';
import cors from 'cors';
import {handleApiError} from './utils/logs/handleError';
const app = express();

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
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});