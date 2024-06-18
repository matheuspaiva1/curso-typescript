"use strict";
function arrendondar(valor) {
    if (typeof valor === 'number') {
        return Math.ceil(valor);
    }
    else {
        return Math.ceil(Number(valor)).toString();
    }
}
console.log(arrendondar(200.32));
console.log(arrendondar('200.32'));
