import express from 'express'
import { getAllProject } from '../src/controllers/project-controller.js';

const todoRouter = express.Router()

todoRouter.get('/all',getAllProject)


export default todoRouter