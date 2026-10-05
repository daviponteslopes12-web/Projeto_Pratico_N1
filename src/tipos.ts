export type Categoria = 
    "alimentação"| 
    "transporte" | 
    "lazer" | 
    "moradia";

export type Mes =
    1 |
    2 |
    3 |
    4 |
    5 |
    6 |
    7 |
    8 |
    9 |
    10 |
    11 |
    12;

export interface Despesa {
    
    readonly id: number;
    descricao: string;
    valor: number;
    
    categoria: Categoria;
    mes: Mes;
    observacao?: string; 
}

//Array com as categorias para ser reutilizada
export const CATEGORIAS: Categoria[] = [
    "alimentação",
    "transporte",
    "lazer",
    "moradia"
];

/**
 * readonly no id porque o identificador não deve ser alterado depois que a despesa for criada
 * 
 * Categoria e Mes reutiliza o Union Type definido acima.
 * 
 * O ? indica que a observação é opcional.
 */