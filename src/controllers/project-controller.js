import Project from "../models/Project.js"
import addNewTitleSchema from "../schemas/addNewTitleSchema.js"
export const getAllProject = async (req,res) =>{
    console.log("i am in get all")
    const data = await Project.find()
    const newData = data.map(data => {
        return{ 
            title: data.title,
            id: data.id,
            Status: data.Status
        }
    })
  
    return res.status(200).json(newData)
}


export const addNewTitle = async (req,res) =>{
    const {body} = req;
    console.log(body)
    const validator = await addNewTitleSchema()
    console.log("5")

    const {value,error} = validator.validate(body)
    
    if (error){
        return res.status(401).json(error.details)
    }

    const {title,status}  = value ;
    const lassTitle = await Project.find().sort({_id: -1}).limit(1)
    const id = lassTitle.length > 0 ? lassTitle[0].id + 1 : 1;
     
    const  Title = {
        title,
        id,
        status
    }
    await Project.create({ ...Title})
    return res.status(201).json({...Title})
}
