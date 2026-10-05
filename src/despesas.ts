import { Categoria, Despesa } from "./tipos.js";

export function adicionarDespesa(despesas: Despesa[], nova: Despesa): Despesa[] {
    if (nova.valor <= 0 || nova.mes < 1 || nova.mes > 12) {
        throw new Error("Dados da despesa inválidos");
    }

    return [...despesas, nova];
}

export function removerDespesa(despesas: Despesa[], id: number): Despesa[] {
    return despesas.filter((despesa) => despesa.id !== id);
}

export function despesasDaCategoria(despesas: Despesa[], categoria: Categoria): Despesa[] {
    return despesas.filter((despesa) => despesa.categoria === categoria);
}

export function totalGasto(despesas: Despesa[]): number {
    return despesas.reduce((total, despesa) => total + despesa.valor, 0);
}

export function maiorDespesa(despesas: Despesa[]): Despesa | undefined {
    if (despesas.length === 0) {
        return undefined;
    }

    return despesas.reduce((maior, despesa) => {
        if (despesa.valor > maior.valor) {
            return despesa;
        }

        return maior;
    });
}