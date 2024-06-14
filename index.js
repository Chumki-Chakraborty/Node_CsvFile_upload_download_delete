const express=require("express")
const app=express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const dotenv=require("dotenv")
dotenv.config()
const MongodbConnection=require("./Config/Database")
MongodbConnection()
// csvroute
const csvroute=require("./route/csvroute")
app.use(csvroute)

const port=1000
app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`);
})