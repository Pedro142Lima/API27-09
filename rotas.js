import carroController from './controller/carroController.js'

export default function addRotas(servidor) {
    servidor.use(carroController)
}