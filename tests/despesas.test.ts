import { describe, it, expect } from "vitest";
import {
    adicionarDespesa,
    removerDespesa,
    despesasDaCategoria,
    totalGasto,
    maiorDespesa
} from "../src/despesas.js";
import { Despesa } from "../src/tipos.js";

describe("adicionarDespesa", () => {
    it("deve adicionar uma despesa válida", () => {
        const despesas: Despesa[] = [];

        const novaDespesa: Despesa = {
            id: 1,
            descricao: "Almoço",
            valor: 30,
            categoria: "alimentação",
            mes: 1
        };

        const resultado = adicionarDespesa(despesas, novaDespesa);

        expect(resultado.length).toBe(1);
        expect(resultado[0]).toBe(novaDespesa);

        // O array original não deve ser alterado para evitar efeitos colaterais.
        expect(despesas.length).toBe(0);
    });

    it("deve rejeitar uma despesa com valor igual a zero", () => {
        const despesas: Despesa[] = [];

        const novaDespesa: Despesa = {
            id: 2,
            descricao: "Cinema",
            valor: 0,
            categoria: "lazer",
            mes: 1
        };

        expect(() => adicionarDespesa(despesas, novaDespesa)).toThrow();
    });
});

describe("removerDespesa", () => {
    it("deve remover uma despesa pelo id", () => {
        const despesa: Despesa = {
            id: 1,
            descricao: "Almoço",
            valor: 30,
            categoria: "alimentação",
            mes: 1
        };

        const despesas = [despesa];

        const resultado = removerDespesa(despesas, 1);

        expect(resultado.length).toBe(0);
        expect(despesas.length).toBe(1);
    });

    it("deve retornar uma cópia quando o id não existir", () => {
        const despesa: Despesa = {
            id: 1,
            descricao: "Almoço",
            valor: 30,
            categoria: "alimentação",
            mes: 1
        };

        const despesas = [despesa];

        const resultado = removerDespesa(despesas, 2);

        expect(resultado.length).toBe(1);
        expect(resultado[0]).toBe(despesa);
    });
});

describe("despesasDaCategoria", () => {
    it("deve retornar somente despesas da categoria informada", () => {
        const despesa1: Despesa = {
            id: 1,
            descricao: "Almoço",
            valor: 30,
            categoria: "alimentação",
            mes: 1
        };

        const despesa2: Despesa = {
            id: 2,
            descricao: "Ônibus",
            valor: 5,
            categoria: "transporte",
            mes: 1
        };

        const resultado = despesasDaCategoria(
            [despesa1, despesa2],
            "alimentação"
        );

        expect(resultado.length).toBe(1);
        expect(resultado[0]).toBe(despesa1);
    });

    it("deve retornar uma lista vazia quando não houver despesas da categoria", () => {
        const despesa: Despesa = {
            id: 1,
            descricao: "Almoço",
            valor: 30,
            categoria: "alimentação",
            mes: 1
        };

        const resultado = despesasDaCategoria(
            [despesa],
            "lazer"
        );

        expect(resultado.length).toBe(0);
    });
});

describe("totalGasto", () => {
    it("deve somar os valores das despesas", () => {
        const despesas: Despesa[] = [
            {
                id: 1,
                descricao: "Almoço",
                valor: 30,
                categoria: "alimentação",
                mes: 1
            },
            {
                id: 2,
                descricao: "Ônibus",
                valor: 5,
                categoria: "transporte",
                mes: 1
            }
        ];

        const resultado = totalGasto(despesas);

        expect(resultado).toBe(35);
    });

    it("deve retornar zero para uma lista vazia", () => {
        const despesas: Despesa[] = [];

        const resultado = totalGasto(despesas);

        expect(resultado).toBe(0);
    });
});

describe("maiorDespesa", () => {
    it("deve retornar a despesa de maior valor", () => {
        const despesa1: Despesa = {
            id: 1,
            descricao: "Almoço",
            valor: 30,
            categoria: "alimentação",
            mes: 1
        };

        const despesa2: Despesa = {
            id: 2,
            descricao: "Aluguel",
            valor: 1000,
            categoria: "moradia",
            mes: 1
        };

        const resultado = maiorDespesa([despesa1, despesa2]);

        expect(resultado).toBe(despesa2);
    });

    it("deve retornar undefined para uma lista vazia", () => {
        const despesas: Despesa[] = [];

        const resultado = maiorDespesa(despesas);

        expect(resultado).toBe(undefined);
    });
});