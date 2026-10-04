export interface Despesa {
    readonly id: number
    descricao: string
    valor: number 
    categoria: 
    "alimentação" |
    "transporte" |
    "lazer" |
    "moradia"
    mes: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    observacao?: string
}


export const CATEGORIAS = [ 
    "alimentação", 
    "transporte", 
    "lazer", 
    "moradia" 
]; 



/*
readonly no id por ser um atributo que nunca muda 
depois de criado.

(?) na observacao para dizer que é um atributo opcional.

Uso de Union Types que restrigem o valor de mes e categoria.
*/