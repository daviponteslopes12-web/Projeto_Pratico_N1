import { Categoria, Despesa, CATEGORIAS } from "./tipos.js";

export function descricaoCategoria(categoria: Categoria): string {
    switch (categoria) {
        case "alimentação":
            return "Alimentação";
        case "transporte":
            return "Transporte";
        case "lazer":
            return "Lazer";
        case "moradia":
            return "Moradia";
    }
}

export function matrizCategoriaMes(despesas: Despesa[]): number[][] {
    const matriz: number[][] = [];

    for (let i = 0; i < CATEGORIAS.length; i++) {
        matriz[i] = [];

        for (let j = 0; j < 12; j++) {
            matriz[i][j] = 0;
        }
    }

    for (let i = 0; i < despesas.length; i++) {
        const despesa = despesas[i];

        if (despesa !== undefined) {
            const categoria = CATEGORIAS.indexOf(despesa.categoria);
            const mes = despesa.mes - 1;

            matriz[categoria][mes] += despesa.valor;
        }
    }

    return matriz;
}

export function formatarRelatorio(despesas: Despesa[]): string {
    const matriz = matrizCategoriaMes(despesas);

    let relatorio = "RELATÓRIO DE GASTOS\n\n";

    for (let i = 0; i < CATEGORIAS.length; i++) {
        let totalCategoria = 0;

        for (let j = 0; j < 12; j++) {
            totalCategoria += matriz[i][j];
        }

        const categoria = descricaoCategoria(CATEGORIAS[i]);

        relatorio += categoria.padEnd(15) + "R$ "
            + totalCategoria.toFixed(2) + "\n";
    }

    relatorio += "\nTOTAL GERAL: R$ "
        + despesas.reduce((total, despesa) => total + despesa.valor, 0).toFixed(2);

    const maior = despesas.length > 0
        ? despesas.reduce((maior, despesa) =>
            despesa.valor > maior.valor ? despesa : maior
        )
        : undefined;

    if (maior !== undefined) {
        relatorio += "\nMAIOR DESPESA: "
            + maior.descricao.toUpperCase()
            + " - R$ "
            + maior.valor.toFixed(2);
    }

    return relatorio;
}