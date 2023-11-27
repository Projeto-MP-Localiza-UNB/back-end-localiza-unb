import Loja from "./loja.service.js";
import { Router } from "express";

const lojasRotas = Router();
const loja = new Loja();

lojasRotas.post("/cadastrar", async (enviado, resposta) => {
    const { email, nome, senha, imagem, longitude_fixa, latitude_fixa } =
        enviado.body;
    try {
        const novaLoja = await loja.criarLoja(
            email,
            nome,
            senha,
            imagem,
            longitude_fixa,
            latitude_fixa
        );
        resposta.status(200).json(novaLoja);
    } catch (err) {
        resposta.status(400).json({ erro: err.message });
    }
});

export default lojasRotas;
