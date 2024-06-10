//comando tsc -w
class Produto {
  nome: string;
  preco: number;
  constructor(nome: string, preco: number){
    this.nome = nome;
    this.preco = preco;
  }

  precoReal(){
    return `R$ ${this.preco}`
  }
}

const livro = new Produto('guerra', 29.99);
console.log(livro instanceof Produto)

class Livro {
  autor:string;

  constructor(autor:string;){
    this.autor = autor;
  }
}

class Jogo {
  jogador:number;

  constructor(jogador:number;){
    this.jogador = jogador;
  }
}

function buscarProduto(buscar:string){
  if(buscar === 'hobbit'){
    return new Livro('J.R.R Tolkien')
  }
  if (buscar === 'Dark Souls'){
    return new Jogo(59)
  }
  return null;
}

const produto = buscarProduto('Dark Souls')

if (produto instanceof Livro){ 
  console.log(produto.autor)
}

if (produto instanceof Jogo){ 
  console.log(produto.jogador)
}
