"use strict";
function normalizar(valor) {
    if (typeof valor === 'string') {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
console.log(normalizar(' Produto '));
console.log(normalizar(['  banana ', 'UVA   ',]).filter);
function $(selector) {
    return document.querySelector(selector);
}
$('a')?.click;
$('video')?.volume;
