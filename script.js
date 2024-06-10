"use strict";
//comando tsc -w
class Produto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
const livro = new Produto('guerra', 29.99);
console.log(livro instanceof Produto);
class Livro extends Produto {
    autor;
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Produto {
    jogador;
    constructor(nome, jogador) {
        super(nome);
        this.jogador = jogador;
    }
}
function buscarProduto(buscar) {
    if (buscar === 'hobbit') {
        return new Livro('hobbit', 'J.R.R Tolkien');
    }
    if (buscar === 'Dark Souls') {
        return new Jogo('Dark Souls', 59);
    }
    return null;
}
const produto = buscarProduto('Dark Souls');
if (produto instanceof Livro) {
    console.log(produto.autor);
}
if (produto instanceof Jogo) {
    console.log(produto.nome);
}
if (produto instanceof Produto) {
    console.log(produto.nome);
}
