const express = require('express');
const routes = express.Router();

const noteRouter = require('noteAPI');
routes.use("/api", noteRouter);

const userRouter = require('userAPI');
routes.use("/api", userRouter);

const restRouter = require('restaurantAPI');
routes.use("/api", restRouter);

module.exports = routes;