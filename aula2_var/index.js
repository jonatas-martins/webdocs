var button = document.querySelector('button'); // selecionei o botao

button.onclick = function() {      // chamei uma função anonima para quando clicar no botao
    var nome = prompt("Qual é o seu nome?"); // uma variavel para salvar o nome 
    alert (`Olá! ${nome} é um prazer te ver! `) // um alerta com a variavel aparecendo
}

var meuNomeA = ['Jonatas', 'Elisandra', 'Angela']; 
var meuNumeroA = ['25','24','51'];



var cachorro = {nome: 'Jojo', raca: 'Dalmata'}

console.log(cachorro)

var meuNome; 
meuNome = 'Jonatas'
var minhaIdade = 25