function meuEscopo(){
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');    
        const sobrenome = form.querySelector('.sobrenome');    
        const peso = form.querySelector('.peso');    
        const altura = form.querySelector('.altura');  
        
        let pessoa1 = { nome: nome.value, 
                        sobrenome: sobrenome.value, 
                        peso: peso.value, 
                        altura: altura.value};
        
        pessoas.push(pessoa1);
        console.log("adicionado: \n", pessoa1);

        console.log(pessoas);

        result.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +
                                 `${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();