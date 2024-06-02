const Autores = require('../models/autor.model');

const getAllautor =  async (req, res) =>{
    
    try{
        const [result] = await Autores.selectAutores();
        res.json(result);
    } catch ( err){
        res.status(500).json({error: err.message});
    }

}

const getAutorById = async (req, res, next) =>{
    try{

        const [result] = await Autores.selectById(req.params.autores_id);
        if ( result.length === 0) res.status(404).json({fatal:'Autor no econtrado'})
        res.json(result[0]);
    }catch (err){
        next(err);
    }

}

const createautor = async (req, res) => {
    const [result] = await Autores.insertAutor(req.body);
    res.json(result);
}


module.exports={
    getAllautor, getAutorById, createautor
}
