import Project from "../models/Project.js"

export const getAllProject = async (req,res) =>{
    const data = await Project.find()

    return res.status(200).json(data)
}

export const getAvtiveProjects =  async (req,res) =>{
    const data = await Project.find({active:"false"})

    return res.status(200).json(data)
}

export const getCompletedProjects =  async (req,res) =>{
    const data = await Project.find({active:"true"})

    return res.status(200).json(data)
}