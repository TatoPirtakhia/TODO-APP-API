import express from 'express'
import { getAllProject, getAvtiveProjects, getCompletedProjects } from '../src/controllers/project-controller.js';

const todoRouter = express.Router()

todoRouter.get("/projects",getAllProject)
todoRouter.get("/active",getAvtiveProjects);
todoRouter.get("/completed",getCompletedProjects)

export default todoRouter