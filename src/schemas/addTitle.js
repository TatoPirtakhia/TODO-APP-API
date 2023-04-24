import Joi from "joi"

const addTitle = async ()=>{

    return Joi.object({
        title: Joi.string().min(1).required().message({
            "string.base":"title should be a string",
            "string.min":"title should include 3 characters or more ",
            "any.required":"title id required"
        }),
        status: Joi.boolean().message({
            "boolean.base":"title should be a boolean",
        })
    })
}

export default addTitle