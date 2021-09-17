const express = require('express')
var cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        // Middlewares
        this.middlewares();

        // Rutas de app
        this.routes();
    }

    middlewares() {
        // directorio publico
        this.app.use(express.static('public'))

        // CORS
        this.app.use(cors())

        // lectura y parseo del body
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuario'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('app listening at localhost:' + this.port)
        })
    }

}

module.exports = Server;