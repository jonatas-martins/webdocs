const customName = document.getElementById('customname'); // selecionamos o input
const randomize = document.querySelector('.randomize'); // selecionamos o botao
const story = document.querySelector('.story'); // selecionamos a div onde será colocada a historia
const storyText = 'Estava  94 fahrenheit lá fora, então :insertX: resolveu ir passear. Quando ele chegou na :insertY:, ficou surpreso e por alguns segundos paralisado, então :insertZ:. Bob viu tudo, e claro foi atrás ajudar — :insertX:  300 pounds,'
let insertX = ['Jojo ranger Vermelho','Theo ranger azul','Lili dinossaura']
let insertY = ['Casa da vó Maria','Disneilandia','Casa Branca']
let insertZ = ['pediu uma pizza', 'comprou um picolé de limão', 'correu para ver o que tinha para comer']
// nas variaveis acima colocamos histórias bobas aleatorias para serem geradas
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
// na função acima criamos uma function que chama aleatoriamte alguma das histórias bobas que colocamos nas var

randomize.addEventListener('click', result); // aqui criamos um evento para captar o click no botao de random

function result() {             // nossa função principal,
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX)
  let yItem = randomValueFromArray(insertY)
  let zItem = randomValueFromArray(insertZ)
  newStory = newStory.replace(':insertX:', xItem);
  newStory = newStory.replace(':insertY:', yItem);
  newStory = newStory.replace(':insertZ:', zItem);
  newStory = newStory.replace(':insertX:', xItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name)
  }

  if(document.getElementById("uk").checked) {
    const weight = 'Riu bastante';
    const temperature = 'Muito calor lá fora'

    newStory = newStory.replace('300 pounds' , weight);
    newStory = newStory.replace('94 farenheit', temperature);

  }
  
  story.textContent = newStory;
  story.style.visibility = 'visible';
}