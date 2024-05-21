type NumberOrString = string | number;

let total : NumberOrString = 20
total = '40'

type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
};


function preencherDados(dados: Produto){
  document.body.innerHTML += `
  <h2>${dados.nome}</h2>
  <p>${dados.preco}</p>
  <p>Inclue teclado? ${dados.teclado ? 'sim' : 'não'}</p>
  `
}

const pc:Produto = {
  nome: 'pc',
  preco: 22,
  teclado: true,
}
preencherDados(pc)

preencherDados({
  nome: 'celular',
  preco: 50,
  teclado: false,
})

type Categorias = 'design' | 'codigo' | 'descod'

function pintarCategorias(value: 'design' | 'codigo' | 'descod'){
  console.log(value)
}

pintarCategorias('descod')