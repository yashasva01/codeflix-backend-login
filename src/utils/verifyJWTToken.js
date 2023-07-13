const Jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();
var createError = require('http-errors')

async function verifyToken (token) {
        const secret = process.env.JWT_SECRET
        const res = Jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if(error){
                console.log(error)
            }
            console.log(decoded)
          })
}


module.exports = verifyToken