const mongoose = require('mongoose');
const MenuItemSchema = new mongoose.Schema({
  
  itemName:
  { type: String,
    required: true },
  description: { type: String  },
  price: { type: Number, required: true },
  images: [String],
  category:{
    type:String,
    enum:['cocktail','dish']
  }
});

  const MenuItem = mongoose.model("ShopItem", MenuItemSchema);
  module.exports = MenuItem;