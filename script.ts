/**
 const button = document.querySelector('button');
 function handleClick(event: MouseEvent){
   console.log(event.pageX)
 }
 button?.addEventListener('click', handleClick);
 
 function ativarMenu(event: MouseEvent | TouchEvent | KeyboardEvent) {
   console.log(event)
 }
 
 document.documentElement.addEventListener('mousedown', ativarMenu)
 document.documentElement.addEventListener('touchstart', ativarMenu)
 window.addEventListener('keydown', ativarMenu)
*/


const button = document.querySelector('button')

function handleClick(event: MouseEvent){
  const elemento = event.currentTarget
  if(elemento instanceof HTMLElement){
    console.log(elemento.innerText)
  }
}
button?.addEventListener('click',handleClick)
