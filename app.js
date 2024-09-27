import 'dotenv/config.js';
import express from 'express';
import cors from 'cors'
import addRotas from './rotas.js';


const servidor = express();
servidor.use(express.json());
servidor.use(cors());
addRotas(servidor)

const PORTA = process.env.PORTA;

servidor.listen(PORTA, () => console.log('SUBIU NOS D"!!!!!!!!!!!'));