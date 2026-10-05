import { describe, it, expect } from "vitest";
import { adicionarDespesa,} from "../src/despesas.js";
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

