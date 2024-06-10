"use strict";
const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(event) {
    const nav = document.querySelector('nav');
    const button = event.currentTarget;
    if (button instanceof HTMLElement && nav) {
        const active = nav.classList.contains("active");
        if (active) {
            nav.classList.remove('active');
            button.setAttribute('aria-expanded', 'false');
            button.setAttribute('aria-label', 'Abrir Menu');
        }
        else {
            nav.classList.add('active');
            button.setAttribute('aria-expanded', 'true');
            button.setAttribute('aria-label', 'Fechar Menu');
        }
    }
    console.log(event);
}
btnMobile?.addEventListener('pointerdown', toggleMenu);
