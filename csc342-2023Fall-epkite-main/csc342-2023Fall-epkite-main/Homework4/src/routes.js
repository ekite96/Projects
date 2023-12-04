const express = require('express');
const routes = express.Router();

const frontendRouter = require('./FrontendRouter');
routes.use(frontendRouter);

const apiRouter = require('./APIRouter');
routes.use("/api", apiRouter);

module.exports = routes;