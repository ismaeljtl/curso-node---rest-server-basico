const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {

    const {page = '1', limit = '10'} = req.query

    res.json({
        body: 'Peticion GET desde controlador',
        page, 
        limit
    })
}

const usuariosPost = (req = request, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'Peticion Post desde controlador',
        nombre, 
        edad
    })
}

const usuariosPut = (req = request, res = response) => {
    const { id } = req.params
    res.json({
        body: 'Peticion Put desde controlador',
        id: Number(id)
    })
}

const usuariosPatch = (req = request, res = response) => {
    res.json({
        body: 'Peticion Patch desde controlador'
    })
}

const usuariosDelete = (req = request, res = response) => {
    res.json({
        body: 'Peticion Delete desde controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}