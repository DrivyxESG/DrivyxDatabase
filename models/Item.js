const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  type: { type: String, required: true }, 
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String },
  imageUrl: { type: String },
  additionalFields: {
    yearsInOperation: { type: Number }, 
    price: { type: Number },
    jobLocation: { type: String }, 
  },
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
