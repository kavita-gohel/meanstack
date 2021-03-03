const Joi = require('@hapi/joi');

module.exports.add = (req, res, next) => {
    console.log("schema..",req.body);
    const schema = Joi.object().keys({
        title: Joi.string().required().messages({
            "string.base": `Title should be a type of 'text'`,
            "string.empty": `Title cannot be an empty field`,
            "any.required": `Title is a required`
        }),
        type: Joi.string().required().messages({
            "string.base": `Type should be a type of 'text'`,
            "string.empty": `Type cannot be an empty field`,
            "any.required": `Type is a required`
        }),
        content: Joi.string().required().messages({
            "string.base": `Content should be a type of 'text'`,
            "string.empty": `Content cannot be an empty field`,
            "any.required": `Content is a required`
        })
    });

    value = schema.validate(req.body.body)

    if (value.error) {
        console.log("value.error", value.error);
        // return res.send({msg: value.error.details[0].message ? value.error.details[0].message : 'user cannot add'})
        return res.status(400).json({
            msg: value.error.details[0].message ? value.error.details[0].message : 'Bad request'
        });
    } else {
        next();
    }
};


module.exports.updatePost = (req, res, next) => {
    console.log("schema..",req.body);
    const schema = Joi.object().keys({
        title: Joi.string().required().messages({
            "string.base": `Title should be a type of 'text'`,
            "string.empty": `Title cannot be an empty field`,
            "any.required": `Title is a required`
        }),
        type: Joi.string().required().messages({
            "string.base": `Type should be a type of 'text'`,
            "string.empty": `Type cannot be an empty field`,
            "any.required": `Type is a required`
        }),
        content: Joi.string().required().messages({
            "string.base": `Content should be a type of 'text'`,
            "string.empty": `Content cannot be an empty field`,
            "any.required": `Content is a required`
        })
    });

    value = schema.validate(req.body.body)

    if (value.error) {
        console.log("value.error", value.error);
        // return res.send({msg: value.error.details[0].message ? value.error.details[0].message : 'user cannot add'})
        return res.status(400).json({
            msg: value.error.details[0].message ? value.error.details[0].message : 'Bad request'
        });
    } else {
        next();
    }
};