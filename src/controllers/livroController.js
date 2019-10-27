const express = require('express')

const Livro = require('../models/livro')

const router = express.Router()


router.get('/', (req,res)=>{
    res.send({ok:"deu bom"})
})

router.post('/add', async(req,res)=>{
    try{
        const livro = await Livro.create(req.body);

        return res.send({livro});
    } catch(err){
        return res.status(400).send({ error: 'Falha no registro'})
    }
})

module.exports = app => app.use('/livro', router)