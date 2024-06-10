const links = document.querySelectorAll('.link');

function modifACorBorder (elemento: HTMLElement) {
    elemento.style.color="#D60000";
    elemento.style.border = "1px solid #FF0F0F";
}

links.forEach((link)=>{
  if(link instanceof HTMLElement){
    modifACorBorder(link)
  }
})