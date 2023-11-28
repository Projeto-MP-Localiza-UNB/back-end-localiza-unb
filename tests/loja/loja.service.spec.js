import Loja from "../../loja/loja.service";
import { prismaMock } from "../../singleton";
import prisma from "../../prisma-client";
import { TestUtils } from "../utils/TestUtils";

describe("service de lojas", () => {
    let lojaService;
    let lojaData;

    beforeEach(() => {
        jest.resetAllMocks();

        lojaService = new Loja();
    });

    it("deve estar definido", () => {
        expect(lojaService).toBeDefined();
    });

    describe("criação de nova loja", () => {
        beforeEach(() => {
            lojaData = TestUtils.gerarLoja();
        });

        it("deve criar uma nova loja", async () => {
            prismaMock.loja.create.mockResolvedValue({ ...lojaData });

            const lojaCriada = await lojaService.cadastroLoja(
                lojaData.email,
                lojaData.nome,
                lojaData.senha,
                lojaData.imagem,
                lojaData.longitude_fixa,
                lojaData.latitude_fixa
            );

            const {
                senha: lojaCriadaSenha,
                id: lojaCriadaId,
                ...lojaCriadaData
            } = lojaCriada;

            const {
                senha: lojaMockSenha,
                id: lojaMockId,
                ...lojaMockData
            } = lojaData;

            expect(lojaCriadaData).toEqual(lojaMockData);
        });
    });
});
