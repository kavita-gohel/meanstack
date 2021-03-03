const Joi = require('@hapi/joi');

module.exports.create = (req, res, next) => {
    console.log("schema..",req.body);
    const schema = Joi.object().keys({
        fname: Joi.string().required().messages({
            "string.base": `First name should be a type of 'text'`,
            "string.empty": `First name cannot be an empty field`,
            "any.required": `First name is a required`
        }),
        lname: Joi.string().required().messages({
            "string.base": `Last name should be a type of 'text'`,
            "string.empty": `Last name cannot be an empty field`,
            "any.required": `Last name is a required`
        }),
        email: Joi.string().email({ minDomainSegments: 2 }).messages({
            "string.base": `Email should be a type of 'text'`,
            "string.empty": `Email cannot be empty`,
            "string.email": `Email is not valid`,
        }),
        password: Joi.string().min(6).max(10).required().messages({
            "string.base": `Password should be a type of 'text'`,
            "string.empty": `Password cannot be an empty field`,
            "string.min": `Password should have a minimum length of {#limit}`,
            "string.max": `Password should have a maximum length of {#limit}`,
            "any.required":`Password is a required`
        }),
        mono: Joi.string().required().messages({
            "string.base": `mono should be a type of 'text'`,
            "string.empty": `mono cannot be an empty field`,
            "any.required": `mono is a required`
        }),
        gender: Joi.string().required().messages({
            "string.base": `gender should be a type of 'text'`,
            "string.empty": `gender cannot be an empty field`,
            "any.required": `gender is a required`
        }),
        photo: Joi.string().required().messages({
            "string.base": `photo should be a type of 'text'`,
            "string.empty": `photo cannot be an empty field`,
            "any.required": `photo is a required`
        }),
        hobby: Joi.required().messages({
            // "string.base": `hobby should be a type of 'text'`,
            // "string.empty": `hobby cannot be an empty field`,
            "any.required": `hobby is a required`
        })
            
        //     mono: Joi.string().required().message({
        //     // "string.pattern.base" : `Phone number must have 10 digits.`,
        //     "string.base": `Mobile number should be type of 'number'`,
        //     "string.empty": `Mobile number cannot be an empty field`,
        //     // "string.min": `Mobile number should have a minimum length of {#limit}`,
        //     // "string.max": `Mobile number should have a maximum length of {#limit}`,
        //     "any.required": `Mobile number is a required`
        //  }),
});

    value = schema.validate(req.body, {abortEarly:true})

    if (value.error) {
        console.log("value.error", value.error);
        return res.send({msg: value.error.details[0].message ? value.error.details[0].message : 'user cannot add'})
        // return res.status(400).json({
        //     msg: value.error.details[0].message ? value.error.details[0].message : 'Bad request'
        // });
    } else {
        next()
    }
};



module.exports.update = (req, res, next) => {
    console.log("schema..",req.body);
    const schema = Joi.object().keys({
        fname: Joi.string().required().messages({
            "string.base": `First name should be a type of 'text'`,
            "string.empty": `First name cannot be an empty field`,
            "any.required": `First name is a required`
        }),
        lname: Joi.string().required().messages({
            "string.base": `Last name should be a type of 'text'`,
            "string.empty": `Last name cannot be an empty field`,
            "any.required": `Last name is a required`
        }),
        email: Joi.string().email({ minDomainSegments: 2 }).messages({
            "string.base": `Email should be a type of 'text'`,
            "string.empty": `Email cannot be empty`,
            "string.email": `Email is not valid`,
        }),
        password: Joi.string().min(6).max(10).required().messages({
            "string.base": `Password should be a type of 'text'`,
            "string.empty": `Password cannot be an empty field`,
            "string.min": `Password should have a minimum length of {#limit}`,
            "string.max": `Password should have a maximum length of {#limit}`,
            "any.required":`Password is a required`
        }),
        mono: Joi.string().required().messages({
            "string.base": `mono should be a type of 'text'`,
            "string.empty": `mono cannot be an empty field`,
            "any.required": `mono is a required`
        }),
        gender: Joi.string().required().messages({
            "string.base": `gender should be a type of 'text'`,
            "string.empty": `gender cannot be an empty field`,
            "any.required": `gender is a required`
        }),
        photo: Joi.string().required().messages({
            "string.base": `photo should be a type of 'text'`,
            "string.empty": `photo cannot be an empty field`,
            "any.required": `photo is a required`
        }),
        hobby: Joi.required().messages({
            // "string.base": `hobby should be a type of 'text'`,
            // "string.empty": `hobby cannot be an empty field`,
            "any.required": `hobby is a required`
        })
});

    value = schema.validate(req.body, {abortEarly:true})

    if (value.error) {
        console.log("value.error", value.error);
        return res.send({msg: value.error.details[0].message ? value.error.details[0].message : 'user cannot add'})
    } else {
        next()
    }
};