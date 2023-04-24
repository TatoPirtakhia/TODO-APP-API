import  express  from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import todoRouter from "../routes/todo-routers.js";
import swaggerMiddleware from "./middlewares/swager-middlewares.js";

const app = express()
dotenv.config()
connect()


app.use(bodyParser.json())

// app.get("/",(req,res) =>{
//     return res.status(200).json({message:"heloo"})
// })

app.use('/api',todoRouter)
app.use('/', ...swaggerMiddleware())
app.listen(3000)