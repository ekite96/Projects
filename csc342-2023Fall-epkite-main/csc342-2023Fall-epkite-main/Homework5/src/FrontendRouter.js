const express = require('express');
const frontendRouter = express.Router();

const html_dir = __dirname + "/templates/";

/*****************\
* FRONTEND ROUTES *
\*****************/
frontendRouter.get('/login', (req, res) => {
  res.sendFile(`${html_dir}login.html`);
});

frontendRouter.get('/', (req, res) => {
  res.sendFile(`${html_dir}home.html`);
});

module.exports = frontendRouter;