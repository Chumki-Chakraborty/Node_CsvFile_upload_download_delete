const express=require("express")

const csvroute=express.Router()
const uploadfile=require("../Utilits/csvfileupload")
const { Csvuploads, downloadCSV, DeleteCsvFile } = require("../Controller/CsvController")

csvroute.post("/addcsvfile",uploadfile.single("file"),Csvuploads)
csvroute.get('/download',downloadCSV)
csvroute.get("/deletefile",DeleteCsvFile)

module.exports=csvroute