const numeros = [10,20,30,40]
const valores = [10, 'taxas', 30, 'numeros',40]

function maiorQue10(data: Array<number>){
  return data.filter((n) => n == 10)
}

function filtrarValores(data: Array<number | string>){
  return data.filter(item => typeof item === 'number')
}

console.log(maiorQue10(numeros))
console.log(filtrarValores(valores))

// array de arrays
const dados = [
  ['senhor dos aneis', 80],
  ['game of thrones', 60],

]