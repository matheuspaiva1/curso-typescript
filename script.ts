function arrendondar(valor: number): number
function arrendondar(valor: string): string 

function arrendondar(valor: number | string): number | string {
  if (typeof valor === 'number'){
    return Math.ceil(valor)
  } else {
    return Math.ceil(Number(valor)).toString()
  }
}

console.log(arrendondar(200.32))
console.log(arrendondar('200.32'))

