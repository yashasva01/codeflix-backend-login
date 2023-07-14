const Joi = require('joi');

const userCreationSchema = Joi.object({
    name: Joi.string().required(),
    userName: Joi.string().required().email({ tlds: { allow: false } }),
    password: Joi.string().required(),
    role: Joi.string().valid('admin','user').required(),
})

const userLoginSchema = Joi.object({
    userName: Joi.string().required().email({ tlds: { allow: false } }),
    password: Joi.string().required(),
})

const userDeletionSchema = Joi.object({
    userName: Joi.string().required().email({ tlds: { allow: false } }),
    password: Joi.string().required(),
})

const authTokenSchema = Joi.object({})

module.exports = {
    userCreationSchema,
    userDeletionSchema,
    userLoginSchema,
    authTokenSchema
}