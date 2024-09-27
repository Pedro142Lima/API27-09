import * as bd from '../repository/carroRepository.js';
import { Router } from 'express';
const endpoints = Router()

endpoints.get('/buscar/:placa', async (req, resp) => {
try {
    let carro = req.params.placa

    let consultaFeita = await bd.Buscar(carro)

    resp.send(consultaFeita)
} catch (error) {
    resp.status(400).send({
        error: error.message
    })
}
})

endpoints.get('/buscarAll', async (req, resp) => {
    try {
    
        let consultaFeita = await bd.BuscarAll()
    
        resp.send(consultaFeita)
    } catch (error) {
        resp.status(400).send({
            error: error.message
        })
    }
    })


endpoints.post ( '/inserir', async (req,resp ) => {
    try {
        let vrum = req.body;
        let id = await bd.AddCarro(vrum)   
        
        resp.send({
            novoID: id
        })
    } catch (error) {
        resp.status(400).send({
            error: error.massage
        })
    }
} )


endpoints.delete('/deletar/:id', async (req, resp) => {
    try {
        let id = req.params.id

        let deleteFeito = await bd.DeletarCarro(id)

        resp.status(200).send({
            id: deleteFeito
        })
    } catch (error) {
        resp.status(400).send({
            message: 'Thiago burrao não sabe deletar',
            error: error.message
        })
    }
})

endpoints.put('/modificar/:id', async (req, resp) =>{
try {
 let vrum = req.body
 let idcarro = req.params.id

 let linhasAfetadas = await bd.modificarCarro(vrum, idcarro)

 if (linhasAfetadas >= 1) {
    resp.send({
        message: 'Dados alterados com sucesso'
    })
 } else {
    resp.status(400).send({
        erro: 'Nenhum registro encontrado'
    })
 }
} catch (error) {
    resp.status(400).send({
        message: 'Erro seu burro',
        error: message
    })
}

})
export default endpoints;

