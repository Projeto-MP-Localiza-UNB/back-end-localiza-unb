import request from "supertest";
import app from "../index.js";

describe("Teste do estado do servidor", () => {
    it("Testa se o servidor está recebendo solicitações e respondendo", async () => {
        const res = await request(app).get("/");

        expect(res.status).toBe(200);
    });
});
