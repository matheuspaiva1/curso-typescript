"use strict";
function typeGuard(value) {
    if (typeof value === 'string') {
        return value.toLowerCase();
    }
    if (typeof value === 'number') {
        return value.toFixed();
    }
    if (value instanceof HTMLElement) {
        return value.innerText;
    }
}
typeGuard(200);
typeGuard('333');
typeGuard(document.body);
const obj = {
    nome: 'document'
};
if ('preco' in obj) {
    console.log('sim');
}
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleProduct(json);
}
function handleProduct(data) {
    console.log(data);
    if ('total' in data) {
        document.body.innerHTML += `
    <p>Nome: ${data.nome}</p>
    <p>Preco: ${data.total + 100}</p>`;
    }
}
fetchProduct();
