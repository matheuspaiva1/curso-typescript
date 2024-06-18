"use strict";
/**
 * EXEMPLO 1:
function retorno<variavel>(a: variavel): variavel{
  return a
}

console.log(retorno('A Game'))

 * => o generic (variavel) adapta a função para o tipo na qual ela esta retornando
 * EX:
 * console.log(retorno('A Game'))
 * function retorno<string>(a: string): string{
      return a
    }
 *
console.log(retorno<number>(200)) // => também pode informar o tipo aqui
console.log(retorno(true))
///////////////////////////////////////////////////////////////////////////////////////
EXEMPLO 2:

const numeros = [1,2,3,4,5,6,7,8,9]
const frutas = ['banana','pera','uva','laranja','limão','maçã']

function firstFive<TipoLista>(lista: TipoLista[]): TipoLista[]{
  return lista.slice(0,5)
}

console.log(firstFive(numeros))
console.log(firstFive(frutas).map((item)=> item))
///////////////////////////////////////////////////////////////////////////////////

EXEMPLO 3:
function notNull<T>(arg:T){
  if(arg !== null){
    return arg
  } else {
    return null
  }
}

notNull('MATHEUS')?.toLowerCase()
notNull(200)?.toFixed()
*/
function tipoDado(a) {
    const resultado = {
        dado: a,
        tipo: typeof a,
    };
    console.log(resultado);
    return resultado;
}
tipoDado(true).tipo;
tipoDado(200).tipo;
