import request from "supertest";
import app from "../index.js";

describe("Teste do estado do servidor", () => {
    it("Testa se o servidor está recebendo solicitações e respondendo", async () => {
        // Dispara uma requisição no caminho '/' para a aplicação e armazena a resposta em variável
        const res = await request(app).get("/");

        // Testa se a propriedade status da resposta é 200 - caso de sucesso
        expect(res.status).toBe(200);
    });
});
