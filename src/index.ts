import { adicionarDespesa } from "./despesas.js";
import { formatarRelatorio } from "./relatorio.js";
import { Despesa } from "./tipos.js";

let despesas: Despesa[] = [];

despesas = adicionarDespesa(despesas, {
    id: 1,
    descricao: "Aluguel",
    valor: 1200,
    categoria: "moradia",
    mes: 1
});

despesas = adicionarDespesa(despesas, {
    id: 2,
    descricao: "Supermercado",
    valor: 450,
    categoria: "alimentação",
    mes: 1
});

despesas = adicionarDespesa(despesas, {
    id: 3,
    descricao: "Ônibus",
    valor: 120,
    categoria: "transporte",
    mes: 2
});

despesas = adicionarDespesa(despesas, {
    id: 4,
    descricao: "Cinema",
    valor: 80,
    categoria: "lazer",
    mes: 2
});

despesas = adicionarDespesa(despesas, {
    id: 5,
    descricao: "Restaurante",
    valor: 150,
    categoria: "alimentação",
    mes: 3
});

despesas = adicionarDespesa(despesas, {
    id: 6,
    descricao: "Combustível",
    valor: 200,
    categoria: "transporte",
    mes: 3
});

despesas = adicionarDespesa(despesas, {
    id: 7,
    descricao: "Internet",
    valor: 100,
    categoria: "moradia",
    mes: 4
});

despesas = adicionarDespesa(despesas, {
    id: 8,
    descricao: "Viagem",
    valor: 500,
    categoria: "lazer",
    mes: 4
});

console.log(formatarRelatorio(despesas));
