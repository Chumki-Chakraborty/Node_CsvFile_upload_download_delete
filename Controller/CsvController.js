const csv=require("csvtojson")
const path=require("path")
const fs=require("fs")
const CsvModel=require("../model/CsvModel")

const Csvuploads=async(req,res)=>{
    try{
        const UserData=[]
        csv()
        .fromFile(req.file.path)
        .then(async(response)=>{
            for(let x= 0;x<response.length;x++){
                UserData.push({
                    name:response[x].name,
                    email:response[x].email,
                    mobile:response[x].mobile
                }) 
            }
            const data=await CsvModel.insertMany(UserData)
            return res.status(201).json({
                success:true,
                message:"Csv file upload done..",
                userdata:data
            })
        })
    }catch(error){
        return res.status(404).json({
            error:error.message
        })
    }
}
const downloadCSV = (req, res) => {
   return res.download("./public/csvfile.csv")
   
  };
  const DeleteCsvFile=(req,res)=>{
    
     fs.unlinkSync("./public/csvfile.csv")
     res.status(500).json({
        message:"Csv file is deleted.."
        
     });
  }
module.exports={
    Csvuploads,
    downloadCSV,
    DeleteCsvFile
}