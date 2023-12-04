const express = require('express');

const app = express();
const PORT = process.env.PORT;

app.use(express.static('static'));
app.use(express.urlencoded({entended: true}));

const routes = require('routes');
app.use(routes);

// As our server to listen for incoming connections
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));