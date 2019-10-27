const mongoose = require('mongoose')

const LivroSchema = new mongoose.Schema({

    titulo:{
        type: String,
        required: true,
    },
    ano:{
        type:Number,
        required:true
    },
    paginas:{
        type:Number,
        required:true
    },
    resumo:{
        type:String,
        required:true
    },
    capa:{
        type:String,
    },
    nota:{
        type:Number,
        required:true
    },
    autor:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})

const Livro = mongoose.model('Livro', LivroSchema)
module.exports = Livro;