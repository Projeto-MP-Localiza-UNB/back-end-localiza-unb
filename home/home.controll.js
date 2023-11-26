import Localizacao from "./local.service.js";
import { Router } from "express";
import Pesquisa from './pesquisa.service.js';

const homeRotas = Router();


const pesquisa = new Pesquisa();
const localizacao = new Localizacao();

homeRotas.post('/pesquisa', async (enviado, resposta) => {
    const { palavraChave } = enviado.body;
  
    try {
      const lojasEncontradas = await pesquisa.buscarLojasPorPalavraChave(palavraChave);
  
      if (lojasEncontradas.length > 0) {
        resposta.status(200).json(lojasEncontradas);
      } else {
        resposta.status(404).json({ mensagem: 'Nenhum resultado encontrado' });
      }
    } catch (error) {
      resposta.status(500).json({ erro: 'Erro interno do servidor' });
    }
  });
  
export default homeRotas;
