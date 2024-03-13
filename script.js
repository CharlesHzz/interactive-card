let cartaoNumber = document.querySelector('#card-number-input');
let nome = document.querySelector('#cartaoNome');
let dataCartao = document.querySelector('#data');
let nomeNoCartao = document.querySelector('#nome')
let numeroNoCartao = document.querySelector('#card-number');
let cvc =document.querySelector('#cvc');
let cvcVerso = document.querySelector('#verso')

let mesCartao = document.querySelector('#mes');
let anoCartao = document.querySelector('#ano');


const confirmButton  = document.querySelector('#confirm')

nome.addEventListener('input', () => {
    nomeNoCartao.textContent = nome.value;
});

cartaoNumber.addEventListener('input', ()=> {
    numeroNoCartao.textContent = cartaoNumber.value
    let cardNumber = cartaoNumber.value.replace(/\s/g, '');
    cardNumber = cardNumber.replace(/(\d{4})/g, '$1 ')
    cartaoNumber.value = cardNumber.trim();
});


confirmButton.addEventListener('click', ()=> {
    let cardNumber = cartaoNumber.value;
    let dadonome = nome.value;
    let dadoMes = mesCartao.value;
    let dadoAno = anoCartao.value;
    let dadoCvc = cvc.value

    if(dadoMes > 12){
        alert('coloque um mes real otario')
    }


    cvcVerso.innerHTML = dadoCvc;
    numeroNoCartao.innerHTML = cardNumber;
    nomeNoCartao.innerHTML = dadonome;
    dataCartao.innerHTML= `${dadoMes}/${dadoAno}`

    console.log(dadonome);
    console.log('Número do Cartão:', cardNumber);

})