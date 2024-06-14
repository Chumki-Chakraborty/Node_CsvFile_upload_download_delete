const mongoose=require("mongoose")

const schema=mongoose.Schema

const CsvSchema=new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }
})

const CsvModel=mongoose.model("userdata",CsvSchema)
module.exports=CsvModel