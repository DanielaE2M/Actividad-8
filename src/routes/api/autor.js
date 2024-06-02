const router = require('express').Router();

const { getAllautor, getAutorById, createautor } = require('../../controllers/autor.controller');

router.get('/', getAllautor);
router.get('/:autores_id', getAutorById)
router.get('/', createautor)

module.exports = router;