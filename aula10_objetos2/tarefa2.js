const cat = {
  name: 'Bertie',
  breed: 'Cymric',
  color: 'white',
  greeting: function () {
    console.log(`Hello, said ${cat.name} the ${cat.breed}.`);
  },
};

const catTwo = {
  name: 'Lili',
  breed: 'Gostosa',
  color: 'black',
  greeting: function () {
    console.log(`Hello, said ${catTwo.name} the ${catTwo.breed}.`);
  },
};


cat.greeting()
catTwo.greeting()