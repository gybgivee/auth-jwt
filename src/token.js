const jwt = require('jsonwebtoken');

/**
 * Implement this function to accept a payload and a secret key and return a JWT without an expiry time
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
 */
//Synchronous Sign with default (HMAC SHA256)
 function createToken(payload, secret) {
    return jwt.sign(payload, secret);
    //return  jwt.sign(payload,{ algorithm: 'HS256' }, secret);


    /*
    return new Promise((resolve, reject) => {
        jwt.sign({data:payload}, secret, (err, token) => {
            console.log(1,{ err, token });
            if(err) reject(err);
            else resolve(token);
           
        });
      })*/
   
   
}


/**
 * Implement this function to accept a payload, secret key and an expiry time, and return a JWT with an expiry
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim
 */
function createTokenWithExpiry(payload, secret, expires) {
return jwt.sign(
    payload, secret, 
    { expiresIn: expires });


}
/**
 * Implement this function to accept a JWT and a secret key. Return the decoded token (the payload) if verification is successful, and false if it fails
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
function verifyToken(token, secret) {
    try{
        return jwt.verify(token, secret);
    }catch(err){
        return false;
    }
   
}

module.exports = {
    createToken,
    createTokenWithExpiry,
    verifyToken
}
