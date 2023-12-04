const express = require('express');
const frontendRouter = express.Router();

const html_dir = __dirname + "/templates/";

/*****************\
* FRONTEND ROUTES *
\*****************/
frontendRouter.get('/', (req, res) => {
  res.sendFile(`${html_dir}index.html`);
});

frontendRouter.get('/home', (req, res) => {
  res.sendFile(`${html_dir}home.html`);
});

frontendRouter.get('/user', (req, res) => {
  res.sendFile(`${html_dir}user.html`);
});

module.exports = frontendRouter;