let persona = {
    name: 'Stephany',
    age: 30,
    favoriteColor: 'purple',
    drinkCoffee: true
};

console.log(persona);
persona.eyes = 'brown';
persona.personality = 'bubbly';
console.log(persona);
persona.favoriteColor = 'aqua';
console.log(persona);
delete persona.age;
console.log(persona);