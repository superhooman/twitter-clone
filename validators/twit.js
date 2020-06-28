const Joi = require("@hapi/joi");

const validateTwit = data => {
  const schema = Joi.object({
    body: Joi.string().min(1).max(255).required(),
  });
  return schema.validate(data);
};

module.exports = validateTwit;