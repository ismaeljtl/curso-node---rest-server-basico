const { Router } = require('express');
const { 
    usuariosGet,
    usuariosPost, 
    usuariosPut, 
    usuariosDelete, 
    usuariosPatch 
} = require('../controllers/usuario');

const router = Router();

router.get('/', usuariosGet)

router.post('/', usuariosPost)

// router.put('/', usuariosPut)
router.put('/:id', usuariosPut)

router.patch('/', usuariosPatch)

router.delete('/', usuariosDelete)

module.exports = router;