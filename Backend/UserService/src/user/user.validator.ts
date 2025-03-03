import Joi from "joi";

export const userSchema = Joi.object({
  query: Joi.object(),
  body: Joi.object({
    fullName: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().length(4).pattern(/^\d+$/).required(),
  }).required(),
  params: Joi.object(),
});
