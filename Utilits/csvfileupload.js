const multer=require("multer")
const path=require("path")

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,"../public"),function(error,success){
            if(error){throw error}
        })
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const uploadfile=multer({
    storage:storage 
})

module.exports=uploadfile