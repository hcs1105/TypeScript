// @ts-nocheck

const { body } = document;
let candidate: number[];
let array: number[] = [];

function chooseNumber() {
  candidate = [1,2,3,4,5,6,7,8,9];
  array = [];
  for(let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random()*(9-i)), 1)[0];
    array.push(chosen);
  }
}

chooseNumber();
console.log(array);

const result = document.createElement('h1');
body.append(result);