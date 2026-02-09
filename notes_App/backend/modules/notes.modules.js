
const mongoose = require("mongoose");

const notes = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    desc:{
        type:String,
        required:true,
        trim:true
    },
    item:{
        type:String,
        required:true,
        trim:true,
    }
})

module.exports=mongoose.model("notes",notes);