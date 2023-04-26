import express from 'express'
import { addNewTitle, deleteTodo, getAllProject, updateStatus } from '../controllers/project-controller.js';

const todoRouter = express.Router()

todoRouter.get('/all',getAllProject)

todoRouter.post('/title',addNewTitle)

todoRouter.put('/updateStatus',updateStatus)

todoRouter.delete('/deleteTodo/:id',deleteTodo)

export default todoRouter