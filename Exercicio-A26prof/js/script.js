const form = document.querySelector('.formulario');
const resultado = document.querySelector('.resultado');

let pesoInput = document.querySelector('#peso');
let alturaInput = document.querySelector('#altura');


function recebeEventoForm(evento){
    evento.preventDefault();

    let peso = parseFloat(pesoInput.value);
    let altura = parseFloat(alturaInput.value);

    let IMC = peso / (altura**2 );

    resultado.innerHTML = `<strong>IMC:</strong> ${IMC.toFixed(2)} <br>`;
    
}


form.addEventListener('submit', recebeEventoForm);

