/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/

const main = document.querySelector('main');
let html = '';

const pets = [
  {name: 'Marty', type: 'Lazy', breed: 'Golden', age: 1, photo: 'golden.jpg'},
  {name: 'Doc', type: 'Sweet', breed: 'Dachshund', age: 1, photo: 'dachshund.jpg'},
  {name: 'Holly', type: 'Crazy', breed: 'aussie', age: 1, photo: 'aussie.jpg'},
  {name: 'Sammie', type: 'Sweet Boy', breed: 'Tabby', age: 8, photo: 'tabby.jpg'},
  {name: 'Zeek', type: 'Old', breed: 'Pug', age: 8, photo: 'pug.jpg'}
];


for (let i = 0; i < pets.length; i++) {
  let pet = pets[i];
  html += `
    <h2>${pet.name}</h2>
    <h3>${pet.type} | ${pet.breed}<h3>
    <p>Age: ${pet.age}
    <br>
<br>
    <img src="img/${pet.photo}" alt="pet.breed">
  `;
  
}


main.innerHTML = html;
