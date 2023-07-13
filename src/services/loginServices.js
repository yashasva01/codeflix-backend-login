const getJwtToken = require('../utils/signJWTToken')
const mongoose = require("mongoose");
const crypto = require('crypto')
const { User } = require('../models/user')
var createError = require('http-errors')



async function userCreation (userName, password, role, name) {
    const hashSecret = process.env.HASH_SECRET
    const hashedPassword = crypto.createHash('sha256', hashSecret).update(password).digest('hex');

    var user = await User.findOne({
        userName: userName
    })
    if(user){
        const error = createError(400, 'This user already exists.')
        throw error
    }

    user = await User.create({
        userName: userName,
        password: hashedPassword,
        role: role,
        name: name
    });
    return {userName: user.userName, role: user.role, name:user.name }
}

async function userLogin(userName, password) {
    var user = await User.findOne({
        userName: userName
    })

    if(user){
        const hashSecret = process.env.HASH_SECRET
        const hashedPassword = await crypto.createHash('sha256', hashSecret).update(password).digest('hex');

        if(hashedPassword != user.password){
            const error = createError(400, 'Password did not match')
            throw error
        }
    }else {
        const error = createError(400, 'User does not exists, try signing in first')
        throw error
    }
    const token = getJwtToken({userName: user.userName, role: user.role})
    return {userName: user.userName, authToken: token, name: user.name}
}

async function userDeletion(userName, password) {
    var user = await User.findOne({
        userName: userName
    })

    if(user){
        const hashSecret = process.env.HASH_SECRET
        const hashedPassword = await crypto.createHash('sha256', hashSecret).update(password).digest('hex');

        if(hashedPassword != user.password){
            const error = createError(400, 'Password did not match')
            throw error
        }
    }

    await User.deleteOne({
        userName: userName
    })

    return "User deleted."
}

module.exports = {
    userCreation,
    userDeletion,
    userLogin
}