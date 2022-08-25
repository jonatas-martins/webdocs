const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const paraMot = document.querySelector('.para-Mot');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */
let galeria = [
  'images/massa.jpg',
  'images/rubinho.jpg',
  'images/senna.jpg',
  'images/hamilton.jpg',
  'images/vettel.jpg',
];

let altText = [
  'Imagem do Felipe Massa',
  'Imagem do Rubinho',
  'Imagem do Senna',
  'Imagem do Hamilton',
  'Imagem do Vettel',
];

let motivo = [
  'O ultimo grande Brasileiro na F1, estava presente quando eu comecei a me apaixonar pelo esporte e me fez torcer muito por ele e pela ferrari.',

  'Presente por um curto periodo de tempo quando eu comecei a assistir, tem uma historia gigantesca na Ferrari e no esporte e merece maior reconhecimento.',

  'O Melhor piloto da história. Capaz de fazer um pais inteiro parar todos os domingos e assistir F1. Gostaria de poder te-lo assistido',

  'O detentor de mais titulos, quebrador de recordes, o mais brasileiro dos estrangeiros. Sua presença foi uma alento para torcermos enquanto a categoria não tem brasileiros.',

  'Um piloto formidavel e uma pessoa extraordinaria, impossivel não torcer para alguém como ele, uma pena não ter conseguido um campeonato pela Ferrari.',
];

for (i = 0; i <= galeria.length - 1; i++) {
  const newImage = document.createElement('img');

  newImage.setAttribute('src', galeria[i]);
  newImage.setAttribute('alt', altText[i]);

  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', displayImage);
}

function getIndex(src) {
  return galeria.indexOf(src);
}

function displayImage(e) {
  imageSource = e.target.getAttribute('src');
  displayedImage.setAttribute('src', imageSource);
  let paragraph = getParagraph(imageSource);
  paraMot.appendChild(paragraph);
}

function getParagraph(imageSource) {
  let index = getIndex(imageSource);
  let newPara =
    paraMot.getElementsByTagName('p')[0] || document.createElement('p');
  index > -1
    ? (newPara.innerHTML = motivo[index])
    : (newPara.innerHTML = '[ERRO -]');
  return newPara;
}
/* Wiring up the Darken/Lighten button */
