const mongoose = require('mongoose')

// Make A Schema
const fruitSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  longName: { type: String, required: false },
  shares: {type: Number, required: true},
  purchasePrice: { type: Number, required: true },
  principalDate: { type: String, required: true },
  fullExchangeName: { type: String, required: false },
  regularMarketPrice: [{ type: String, required: false }], 
  username: String
})

// Make A Model From The Schema

const Fruit = mongoose.model('Fruit', fruitSchema)

// Export The Model For Use  In The App

module.exports = Fruit