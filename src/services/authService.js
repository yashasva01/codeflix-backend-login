var createError = require('http-errors')
const verfyToken = require('../utils/verifyJWTToken')
const Jwt = require('jsonwebtoken')



async function authenticateTokenService (token) {
    if(token == null){
        const error = createError(401, 'Auth Token required')
        throw error
    }
    const secret = process.env.JWT_SECRET
    var decodedData;
    Jwt.verify(token, secret, (err, decoded) => {
        if(err){
            const error = createError(401, 'Invalid Token, Try loggin in Again')
            throw error
        }
        decodedData = decoded
    })
    return {userName: decodedData.userName, role: decodedData.role}
}

module.exports = {
    authenticateTokenService
}