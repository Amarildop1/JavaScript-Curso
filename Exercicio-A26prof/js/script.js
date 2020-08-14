const form = document.querySelector('.formulario');
const resultado = document.querySelector('.resultado');

let pesoInput = document.querySelector('#peso');
let alturaInput = document.querySelector('#altura');


/* Valida os dados de entrada */
function verificaDadosDeEntrada(peso, altura){
    if(!peso && !altura){
        return resultado.innerHTML = "Preencha os dados!";
    }else{
        if(!peso){
            return resultado.innerHTML = "Informe o peso!";
        }
        if(!altura){
            return resultado.innerHTML = "Informe a altura!";
        }
    }
}


/* Calcula IMC */
function calculaIMC(peso, altura){
    if(peso && altura){
        return peso / (altura**2);
    }
    else{
        verificaDadosDeEntrada(peso, altura);
    }
}


/* Classifica o IMC - (Abaixo do Peso, Normal, Sobrepeso ou Obesidade) */
function classificacaoIMC(IMC){
    
    let p = document.createElement('p');
    p.innerHTML = `<strong>IMC:</strong> ${IMC.toFixed(2)}`;
    resultado.appendChild(p);

    if(IMC < 18.5){
        p.classList.add('abaixoDoPeso');  
        p.innerHTML += " | Abaixo do peso ideal";
    }else if(IMC < 24.9){
        p.classList.add('pesoNormal');
        p.innerHTML += " | Peso normal";
    }else if(IMC < 29.9){
        p.classList.add('sobrepeso');
        p.innerHTML += " | Você está com sobrepeso";
    }else{
        p.classList.add('Obesidade');
        p.innerHTML += " | Obesidade";
    }
    
}

/* Ao clicar em enviar */
function recebeEventoForm(evento){
    evento.preventDefault();

    let peso = parseFloat(pesoInput.value);
    let altura = parseFloat(alturaInput.value);

    resultado.innerHTML = "";
    
    const IMC = calculaIMC(peso, altura);

    classificacaoIMC(IMC);
}



form.addEventListener('submit', recebeEventoForm);

