function calcule() {
    let num1 = Number(prompt('Digite um número:'));
    let res = document.querySelector('section#res');

    res.innerHTML = `<p> Você digitou ${num1}. O dobro de ${num1} é ${num1*2} e a metade de ${num1} é ${num1/2}</p>`
}