const express = require('express');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');

const apiRouter = express.Router();
const users = require('./data/users.json');


apiRouter.use(cookieParser());
apiRouter.use(express.json());

const {TokenMiddleware, generateToken, removeToken} = require('./TokenMiddleware');

apiRouter.get('/user', TokenMiddleware, (req,  res) => {
    res.json(req.user);
  });

apiRouter.post('/login', (req,  res) => {
    if(req.body.username && req.body.password) {
      const user = users.find(user => user.username == req.body.username);
      if (user) { // we found our user
        crypto.pbkdf2(req.body.password, user.salt, 100000, 64, 'sha256', (err, derivedKey) => {
          if (err) { //problem computing digest, like hash function not available
            reject({code: 400, message: "Error: " +err});
          }

          const digest = derivedKey.toString('hex');
          if (user.password == digest) {
            generateToken(req, res, user);

            res.json(user);
          }
          else {
            res.status(401).json({error : "not authenticated"});
          }
        });
      }
      else { // if no user with provided username
        res.status(401).json({error : "not authenticated"});
      }
    }
    else {
      res.status(401).json({error : "not authenticated"});
    }
  });


apiRouter.post('/logout', (req,  res) => {
    removeToken(req, res);
  
    res.json({success: true});
});

module.exports = apiRouter;