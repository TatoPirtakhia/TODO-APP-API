import express from 'express'
import { addNewTitle, getAllProject } from '../controllers/project-controller.js';

const todoRouter = express.Router()

todoRouter.get('/all',getAllProject)

todoRouter.post('/title',addNewTitle)

export default todoRouter