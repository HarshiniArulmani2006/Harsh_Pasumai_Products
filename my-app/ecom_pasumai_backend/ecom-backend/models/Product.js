// const mongoose = require('mongoose');
// const ProductSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String },
//   price: { type: Number, required: true },
//   image: { type: String },
//   stock: { type: Number },
//   //category: { type: String }
  
// });
// module.exports = mongoose.model('Product', ProductSchema);

// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     price: { type: Number, required: true },
//     description: String,
//     image: String,
//     category: String
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Product", productSchema);

// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   image: String,
//   description: String,
// });

// module.exports = mongoose.model("Product", productSchema);

const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
    },
    image_url: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
