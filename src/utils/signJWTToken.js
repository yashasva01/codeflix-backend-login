const Jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();


function signToken(data) {
    const Token = Jwt.sign(data, process.env.JWT_SECRET, {expiresIn: '1 day'});
    return Token
}


module.exports = signToken