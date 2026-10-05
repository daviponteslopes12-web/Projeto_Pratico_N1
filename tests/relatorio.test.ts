import { describe, it, expect } from "vitest";
import {
    descricaoCategoria,
    matrizCategoriaMes,
    formatarRelatorio
} from "../src/relatorio.js";
import { Despesa } from "../src/tipos.js";

describe("descricaoCategoria", () => {
    it("deve retornar o nome da categoria", () => {
        const resultado = descricaoCategoria("alimentação");

        expect(resultado).toBe("Alimentação");
    });

    it("deve retornar o nome correto para moradia", () => {
        const resultado = descricaoCategoria("moradia");

        expect(resultado).toBe("Moradia");
    });
});

describe("matrizCategoriaMes", () => {
    it("deve colocar o valor da despesa na categoria e mês corretos", () => {
        const despesa: Despesa = {
            id: 1,
            descricao: "Almoço",
            valor: 30,
            categoria: "alimentação",
            mes: 1
        };

        const resultado = matrizCategoriaMes([despesa]);

        expect(resultado.length).toBe(4);
        expect(resultado[0][0]).toBe(30);
    });

    it("deve retornar uma matriz com valores zero quando não houver despesas", () => {
        const resultado = matrizCategoriaMes([]);

        expect(resultado.length).toBe(4);
        expect(resultado[0][0]).toBe(0);
    });
});

describe("formatarRelatorio", () => {
    it("deve gerar um relatório com uma despesa", () => {
        const despesa: Despesa = {
            id: 1,
            descricao: "Almoço",
            valor: 30,
            categoria: "alimentação",
            mes: 1
        };

        const resultado = formatarRelatorio([despesa]);

        expect(resultado.includes("RELATÓRIO")).toBe(true);
        expect(resultado.includes("Alimentação")).toBe(true);
    });

    it("deve gerar um relatório mesmo com uma lista vazia", () => {
        const resultado = formatarRelatorio([]);

        expect(resultado.includes("RELATÓRIO")).toBe(true);
    });
});