function normalizar(valor: string): string;
function normalizar(valor: string[]): string[];


function normalizar(valor: string | string[]): string | string[] {
  if(typeof valor === 'string'){
    return valor.trim().toLowerCase()
  } else{
    return valor.map((item)=> item.trim().toLowerCase())
  }
}

console.log(normalizar(' Produto '))
console.log(normalizar(['  banana ', 'UVA   ', ]).filter)


function $(selector: 'a'): HTMLAnchorElement | null 
function $(selector: 'video'): HTMLVideoElement | null 

function $(selector: string): Element | null {
  return document.querySelector(selector)
}
$('a')?.click
$('video')?.volume