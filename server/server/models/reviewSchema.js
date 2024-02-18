const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    user_id:{
        type : String,
    },
    review:{
        type:String
    },
    number:{
        type:number,
        min : 1,
        max: 5
    }
})

const review = mongoose.model("review", reviewSchema)
module.exports = review