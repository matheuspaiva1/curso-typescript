"use strict";
let total = 20;
total = '40';
function preencherDados(dados) {
    document.body.innerHTML += `
  <h2>${dados.nome}</h2>
  <p>${dados.preco}</p>
  <p>Inclue teclado? ${dados.teclado ? 'sim' : 'não'}</p>
  `;
}
const pc = {
    nome: 'pc',
    preco: 22,
    teclado: true,
};
preencherDados(pc);
preencherDados({
    nome: 'celular',
    preco: 50,
    teclado: false,
});
function pintarCategorias(value) {
    console.log(value);
}
pintarCategorias('descod');
