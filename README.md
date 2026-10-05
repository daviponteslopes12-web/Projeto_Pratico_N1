# Projeto Prático N1 — Controle de Gastos do Mês

## Descrição

Projeto desenvolvido em TypeScript para controle e geração de relatórios de gastos mensais.

O projeto utiliza funções, módulos, arrays, interfaces, Union Types e testes automatizados com Vitest.

## Instalação

Clone o repositório e entre na pasta do projeto:

```bash
git clone URL_DO_REPOSITORIO
cd Projeto_Pratico_N1
```

Instale as dependências:

```bash
npm install
```

## Testes

Para executar os testes automatizados:

```bash
npm test
```

Para verificar os tipos do TypeScript:

```bash
npx tsc --noEmit
```

## Execução

Para executar o programa:

```bash
npm run dev
```

O programa cria despesas de exemplo e exibe no terminal o relatório de gastos.

---

## Arquivos de configuração

### `package.json`

O arquivo `package.json` contém as informações do projeto, os scripts utilizados para execução e as dependências de desenvolvimento.

Principais configurações:

* `"type": "module"` define o projeto como utilizando módulos ES.

* `"test": "vitest run"` executa os testes uma vez, sem iniciar o modo de observação.

* `"dev": "tsx src/index.ts"` executa o arquivo TypeScript principal diretamente.

* `typescript` fornece o compilador e a verificação de tipos do TypeScript.

* `tsx` permite executar arquivos TypeScript diretamente durante o desenvolvimento.

* `vitest` é utilizado para os testes automatizados.

* `@types/node` fornece as definições de tipos do Node.js.

### `tsconfig.json`

O arquivo `tsconfig.json` define as configurações utilizadas pelo TypeScript.

Principais configurações:

* `"module": "nodenext"` configura o uso de módulos de acordo com o padrão do Node.js.

* `"target": "esnext"` define que o código será direcionado para uma versão moderna do JavaScript.

* `"strict": true` ativa a verificação estrita de tipos do TypeScript.

* `"noUncheckedIndexedAccess": false` evita que acessos a posições de arrays sejam tratados automaticamente como possivelmente `undefined`.

* `"exactOptionalPropertyTypes": true` torna mais rigoroso o tratamento de propriedades opcionais.

* `"isolatedModules": true` verifica cada arquivo TypeScript de forma independente.

* `"skipLibCheck": true` evita a verificação dos arquivos de declaração das bibliotecas instaladas.

* `"sourceMap": true` permite a geração de arquivos de mapa para auxiliar na depuração.

* `"declaration": true` permite a geração de arquivos de declaração `.d.ts`.

* `"declarationMap": true` permite associar os arquivos de declaração aos arquivos de origem.

As demais opções comentadas no arquivo foram mantidas como referências da configuração inicial gerada pelo TypeScript.

---

## Registro de uso de IA

A IA foi utilizada no modo Par. Os testes e os requisitos de cada função foram definidos antes da implementação. A IA foi utilizada para gerar a implementação de cada função individualmente, e o código gerado foi revisado antes de ser aceito.

| Função                | Uso da IA e revisão                                                                                                                                                                                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `adicionarDespesa`    | A IA implementou a função a partir dos testes e requisitos definidos. A implementação foi revisada para garantir a validação do valor e do mês e para confirmar que o array original não é alterado. |
| `removerDespesa`      | A IA implementou a remoção da despesa pelo ID. Foi revisado se a função retorna um novo array e mantém o comportamento esperado quando o ID não existe.                                              |
| `despesasDaCategoria` | A IA implementou a filtragem das despesas pela categoria. A implementação foi revisada para verificar se somente as despesas da categoria informada são retornadas.                                  |
| `totalGasto`          | A IA implementou a soma dos valores das despesas. Foi revisado também o comportamento esperado para uma lista vazia.                                                                                 |
| `maiorDespesa`        | A IA implementou a busca pela despesa de maior valor. Foi revisado o comportamento para uma lista vazia, que deve retornar `undefined`.                                                              |
| `descricaoCategoria`  | A IA implementou a conversão da categoria para o nome de exibição. Foi verificado que a função utiliza `switch`, conforme o requisito.                                                               |
| `matrizCategoriaMes`  | A IA implementou a matriz de categorias e meses. A implementação foi revisada para garantir a ordem das categorias, as 12 colunas e o uso somente de laços `for`.                                    |
| `formatarRelatorio`   | A IA implementou a geração do texto do relatório. O resultado foi revisado para verificar o título, os totais, a maior despesa e o uso dos métodos de string exigidos.                               |

---

## Reflexão

Durante o desenvolvimento a IA foi utilizada para implementar as funções a partir dos requisitos e testes definidos.
Foi encontrado um erro em `relatorio.ts`, onde uma variável estava recebendo ela mesma ao invés do array `despesas` e o código precisou ser corrigido.
