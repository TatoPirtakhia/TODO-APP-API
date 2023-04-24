import Project from "../models/Project.js"

export const getAllProject = async (req,res) =>{
    const data = await Project.find()
    const newData = data.map(data => {
        return{ 
            title: data.title,
            id: data.id,
            active: data.active
        }
    })
    return res.status(200).json(newData)
}

