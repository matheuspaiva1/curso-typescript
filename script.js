"use strict";
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
  <div>
  <h2>${data.nome}</h2>
  <p>R$ ${data.preco}</p>
  <strong>Empresa: ${data.empresaMontadora.nome}</strong> <br>
  <strong>R$ ${data.preco}</strong>

  </div>
  `;
}
