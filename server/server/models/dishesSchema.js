const mongoose = require('mongoose');
const Restaurant = require("./restaurantSchema")
const DishesSchema = new mongoose.Schema({
  
    dishID:{
        type:Number,
        required:true,
        unique:true
    },
    dishName:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    price:{
        type: Number, 
        required: true
    },
    images: {
        type:String
    },
      category:{
        type:String,
        enum:['cocktail','dish']
    },
    restaurantID :{
        type : [Restaurant.Schema]
    }
});

  const Dishes = mongoose.model("Dishes", DishesSchema);
  module.exports = Dishes;