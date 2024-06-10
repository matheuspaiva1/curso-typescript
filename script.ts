//comando tsc -w
class Produto {
  nome: string;
  constructor(nome: string){
    this.nome = nome;
  }
}

const livro = new Produto('guerra', 29.99);
console.log(livro instanceof Produto)

class Livro extends Produto {
  autor:string;

  constructor(nome:string, autor:string;){
    super(nome)
    this.autor = autor;
  }
}

class Jogo extends Produto {
  jogador:number;

  constructor(nome: string,jogador:number;){
    super(nome)
    this.jogador = jogador;
  }
}

function buscarProduto(buscar:string){
  if(buscar === 'hobbit'){
    return new Livro('hobbit','J.R.R Tolkien')
  }
  if (buscar === 'Dark Souls'){
    return new Jogo('Dark Souls',59)
  }
  return null;
}

const produto = buscarProduto('Dark Souls')

if (produto instanceof Livro){ 
  console.log(produto.autor)
}

if (produto instanceof Jogo){ 
  console.log(produto.nome)
}

if (produto instanceof Produto){
  console.log(produto.nome)
}

