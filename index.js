let page = document.querySelector('.page');
let changeColorButton = document.querySelector('.color-button');
let form = document.querySelector('.subscription');
let paragraph = document.querySelector('.paragraph');
let input = document.querySelector('input');

changeColorButton.onclick = function() {
  page.classList.toggle('coral');
  page.classList.toggle('turquoise');
}

form.onsubmit = function(evt) {
  evt.preventDefault();
  paragraph.textContent = 'Hello ' + input.value + ', how are you?';
}

// const calculateSquare = function(x, y) {
//     const result = x * y;
//     return result;
// }

// calculateSquare(2, 5);

const array = [1, 2, 3];
const newArray = [];

const createArray = function() {
  for (let i = 0; i < array.length; i++) {
      newArray.push(array[i] * 2);
  }
  return newArray;
}

createArray();
console.log(newArray);

