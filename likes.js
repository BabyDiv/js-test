const heart = document.querySelector('.heart');
const likesNumber = document.querySelector('.likes-number');

heart.onclick = function() {
  if (heart.classList.contains('added')) {
      likesNumber.textContent--;
  } else {
      likesNumber.textContent++;
  }
  heart.classList.toggle('added');
}


// const multiplyByTwo = function(x) {
//     const result = x * 2;
//     return result;
// }

// multiplyByTwo(3);

const multiply = function(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
      newArray.push(array[i] * 6);
  }
  return newArray;
}

console.log(multiply([1, 2, 3]));

const plus = function(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
      newArray.push(array[i] + 1);
  }
  return newArray;
}

console.log(plus([1, 2, 3]));

const changeEachElementOfArray = function(array, changeNumber) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
      newArray.push(changeNumber(array[i]));
  }
  return newArray;
}

const increment = function(num) {
  return num + 1;
}

console.log(changeEachElementOfArray([2, 8, 12], increment));
