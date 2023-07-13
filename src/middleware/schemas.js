const Joi = require('joi');

const userCreationSchema = Joi.object({
    name: Joi.string(),
    userName: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
})

const userLoginSchema = Joi.object({
    userName: Joi.string().required(),
    password: Joi.string().required(),
})

const userDeletionSchema = Joi.object({
    userName: Joi.string().required(),
    password: Joi.string().required(),
})

const authTokenSchema = Joi.object({})

module.exports = {
    userCreationSchema,
    userDeletionSchema,
    userLoginSchema,
    authTokenSchema
}