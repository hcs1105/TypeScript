// @ts-nocheck

const { body } = document;
let candidate: number[];
let array: number[] = [];

function chooseNumber() {
  candidate = [1,2,3,4,5,6,7,8,9];
  array = [];
  for(let i : number = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random()*(9-i)), 1)[0];
    array.push(chosen);
  }
}

chooseNumber();
console.log(array);

const result = document.createElement('p');
body.append(result);
const form = document.createElement('form');
body.append(form);
const input = document.createElement('input');
form.append(input);
input.type = 'text';
input.maxLength = 4;
const button = document.createElement('button');
button.textContent = '입력';
form.append(button);

let wrongCount = 0;

form.addEventListener('submit', event => { 
  event.preventDefault();
  const answer = input.value;

  if(answer === array.join('')) { // 숫자가 맞으면
    result.textContent = '홈런';
    input.value = '';
    input.focus();
    chooseNumber();
    wrongCount = 0;
  } else { // 숫자가 틀리면
    const answerArray = answer.split('');
    let strike = 0;
    let ball = 0;
    wrongCount += 1;
    if (wrongCount > 10) { // 10번 넘게 숫자가 틀리면
      result.textContent = `10번 넘게 틀려서 실패! 답은' ${array.join(',')}'입니다.`;
      input.value = '';
      input.focus();
      chooseNumber();
      wrongCount = 0;
    } else { // 10번 이하로 숫자가 틀리면
      console.log("답이 틀리면", answerArray);
      for(let i : number = 0; i < 3; i++) {
        if(Number(answerArray[i]) === array[i]) { // 같은 자리인지 확인
          console.log('같은 자리');
          strike += 1;
        } else if (array.indexOf(Number(answerArray[i])) > -1) { // 숫자들이 같은 자리는 아니지만 겹치는 경우
          console.log('겹치는 숫자');
          ball += 1;
        }
      }
      result.textContent = `${strike}스트라이크 ${ball}볼입니다.`;
      input.value = '';
      input.focus();
    }
  }
});