import express from "express";
import lojasRotas from "./loja/loja.controll.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Servidor backend rodando!");
});

app.use(lojasRotas);

export default app;
