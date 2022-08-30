const cat = {
  name: { name1: 'Bertie', name2: 'Elfie' },
  breed: { breed1: 'Cymric', breed2: 'Aphrodite Giant' },
  color: { color1: 'white', color2: 'ginger' },
  greeting: function () {
    console.log(`Hello, said ${this.name.name2} the ${this.breed.breed2}.`);
  },
};

cat.greeting();
