const Joi = require('joi')

const userCreationSchema = Joi.object({
    userName: Joi.string(),
    password: Joi.string(),
    role: Joi.string(),
})

const userLoginSchema = Joi.object({
    userName: Joi.string(),
    password: Joi.string(),
})

const userDeletionSchema = Joi.object({
    userName: Joi.string(),
    password: Joi.string(),
})

module.exports = {
    userCreationSchema,
    userDeletionSchema,
    userLoginSchema
}