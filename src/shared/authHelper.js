// shared/authHelper.js
// Helper functions for validating Azure AD tokens

const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const client = jwksClient({
    jwksUri: `https://login.microsoftonline.com/2c8b0440-b840-44d9-b97d-758669cf9f7f/discovery/v2.0/keys`
});

function getKey(header, callback) {
    client.getSigningKey(header.kid, function(err, key) {
        if (err) {
            callback(err);
            return;
        }
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
    });
}

// Validate JWT token and return decoded payload
function validateToken(token) {
    return new Promise((resolve, reject) => {
        if (!token) {
            reject(new Error('No token provided'));
            return;
        }

        // Remove 'Bearer ' prefix if present
        const cleanToken = token.startsWith('Bearer ') ? token.substring(7) : token;

        jwt.verify(cleanToken, getKey, {
            audience: '1c890c47-8d12-4cc6-833a-24dc176e6198', // Your Client ID
            issuer: `https://login.microsoftonline.com/2c8b0440-b840-44d9-b97d-758669cf9f7f/v2.0`, // Your Tenant ID
            algorithms: ['RS256']
        }, (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                resolve(decoded);
            }
        });
    });
}

// Extract user ID from token
function getUserIdFromToken(decoded) {
    // The 'oid' (object ID) claim is the unique user identifier in Azure AD
    return decoded.oid || decoded.sub;
}

module.exports = {
    validateToken,
    getUserIdFromToken
};