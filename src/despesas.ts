import { Categoria, Despesa } from "./tipos.js";

export function adicionarDespesa(despesas: Despesa[], nova: Despesa): Despesa[] {
    if (nova.valor <= 0 || nova.mes < 1 || nova.mes > 12) {
        throw new Error("Dados da despesa inválidos");
    }

    return [...despesas, nova];
}

