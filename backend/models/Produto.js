const mongoose = require('mongoose')

const produtoSchema = new mongoose.Schema({
    nome: String,
    price: Number,
    desc: String,
    quantidade:Number,
    imageUrl: String,
    createdAt: {type: Date, default: Date.now}
})

const Produto = mongoose.model('produto',produtoSchema)

modelNames.exports = Produto