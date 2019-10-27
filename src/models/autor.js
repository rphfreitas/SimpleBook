const mongoose = require('../database')

const AutorSchema = new mongoose.Schema({

    nome:{
        type: String,
        required: true,
    },
    dt:{
        type:Date,
        required:true
    },
    biografia:{
        type:String,
        required:true
    },
    livros:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Livro'
    }]
})

const Autor = mongoose.model('Autor', AutorSchema)
module.exports = Autor;