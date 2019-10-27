const express = require('express')

const Autor = require('../models/autor')
const Livro = require('../models/livro')

const router = express.Router()

router.get('/', async (req,res)=>{
    try{
        const autores = await Autor.find().populate('livros');

        return res.send({ autores})
        
    }catch (err){
        return res.status(400).send({error:"Erro ao carregar autores"});
    }

})

router.get('/:autorId', async(req,res) =>{
   try{
        const autor = await Autor.findById(req.params.autorId).populate('livros');

        return res.send({ autor})
        
    }catch (err){
        return res.status(400).send({error:"Erro ao carregar autor"});
    }
})
router.post('/', async(req,res)=>{

    try {
        const { nome, dt,biografia ,livros } = req.body;
    
        const autor = await Autor.create({ nome, dt, biografia });
    
        await Promise.all(livros.map(async livro => {
          const autorLivro = new Livro({ ...livro, autor: autor._id });
    
          await autorLivro.save();
    
          autor.livros.push(autorLivro);
        }));
    
        await autor.save();
    
        return res.send({ autor });
      } catch (err) {
        return res.status(400).send({ error: 'Erro no cadastro de autor' });
      }
})
router.put('/:autorId', async(req,res)=>{
    try {
        const { nome, dt,biografia, livros } = req.body;
    
        const autor = await Autor.findByIdAndUpdate(req.params.autorId, {
          nome,
          dt,
          biografia
        }, { new: true });
    
        autor.livros = [];
        await Livro.remove({ autor: autorId._id });
    
        await Promise.all(livros.map(async livro => {
          const autorLivro = new Livro({ ...livro, autor: autorId._id });
    
          await autorLivro.save();
    
          autor.livros.push(autorLivro);
        }));
    
        await autor.save();
    
        return res.send({ autor });
      } catch (err) {
        return res.status(400).send({ error: 'Erro ao atualizar autor' });
      }
})
router.delete('/:autorId', async(req,res)=>{
    try {
        await Autor.findByIdAndRemove(req.params.autorId);
    
        return res.send();
      } catch (err) {
        return res.status(400).send({ error: 'Erro ao deletar autor' });
      }

})

module.exports = app => app.use('/autor', router)