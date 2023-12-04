const base64url = require('base64url');
const crypto = require('crypto');

const TOKEN_COOKIE_NAME = "LoginToken";
// In a real application, you will never hard-code this secret and you will
// definitely never commit it to version control, ever
const API_SECRET = "60d0954e20eaa0c02b382171c33c53bc18522cc6d4805eaa02e182b0";

exports.TokenMiddleware = (req, res, next) => {
  // We will look for the token in two places:
  // 1. A cookie in case of a browser
  // 2. The Authorization header in case of a different client
  let token = null;
  if(!req.cookies[TOKEN_COOKIE_NAME]) {
    //No cookie, so let's check Authorization header
    const authHeader = req.get('Authorization');
    if(authHeader && authHeader.startsWith("Bearer ")) {
      //Format should be "Bearer token" but we only need the token
      token = authHeader.split(" ")[1];
    }
  }
  else { //We do have a cookie with a token
    token = req.cookies[TOKEN_COOKIE_NAME]; //Get session Id from cookie
  }

  if(!token) { // If we don't have a token
    console.log("No token");
    res.status(401).json({error: 'Not authenticated'});
    return;
  }

  //If we've made it this far, we have a token. We need to validate it

  try {
    const [encodedHeader, encodedPayload, encodedSignature] = token.split('.');

    const payload = JSON.parse(base64url.decode(encodedPayload));

    req.user = payload.user;
    next(); //Make sure we call the next middleware
  }
  catch(err) { //Token is invalid
    console.log("Token Invalid");
    res.status(401).json({error: 'Not authenticated'});
    return;
  }


}


exports.generateToken = (req, res, user) => {
  let data = {
    user: user,
    // Use the exp registered claim to expire token in 1 hour
    exp: Math.floor(Date.now() / 1000) + (60 * 60)
  }

  const header = {
    alg: 'HS256',
    typ: 'JWT'
    };

    const encodedHeader = base64url(JSON.stringify(header));
    const encodedPayload = base64url(JSON.stringify(data));

    const signatureInput = `${encodedHeader}.${encodedPayload}`;
    const signature = crypto.createHmac('sha256', API_SECRET).update(signatureInput).digest('base64');

    const encodedSignature = base64url.fromBase64(signature);

    const token = `${signatureInput}.${encodedSignature}`;
  //send token in cookie to client
  res.cookie(TOKEN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    maxAge: 2 * 60 * 1000 //This session expires in 2 minutes.. but token expires in 1 hour!
  });
};


exports.removeToken = (req, res) => {
  //send session ID in cookie to client
  res.cookie(TOKEN_COOKIE_NAME, "", {
    httpOnly: true,
    secure: true,
    maxAge: -360000 //A date in the past
  });

}