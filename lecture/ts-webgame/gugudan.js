var numberOne = Math.ceil(Math.random() * 9);
var numberTwo = Math.ceil(Math.random() * 9);
var result = numberOne * numberTwo;
var word = document.createElement('div'); // HTMLDivElement
word.textContent = "".concat(numberOne, " \uACF1\uD558\uAE30 ").concat(numberTwo);
document.body.append(word); // HTMLElement
var form = document.createElement('form'); // HTMLFormElement
document.body.append(form);
var input = document.createElement('input'); // HTMLInputElement
input.type = 'number';
form.append(input);
var button = document.createElement('button'); // HTMLButtonElement
button.textContent = '입력';
form.append(button);
var resultArea = document.createElement('div');
document.body.append(resultArea);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // input.value의 타입은 string이며 Number() 함수를 사용하면 문자열을 숫자로 바꿀 수 있습니다.
    if (result === Number(input.value)) { // 정답을 맞춘 경우, 같은 표현 : if(result === +input.value)
        resultArea.textContent = '딩동댕';
        numberOne = Math.ceil(Math.random() * 9);
        numberTwo = Math.ceil(Math.random() * 9);
        result = numberOne * numberTwo;
        word.textContent = "".concat(numberOne, " \uACF1\uD558\uAE30 ").concat(numberTwo, "\uB294?");
        input.value = '';
        input.focus();
    }
    else { // 틀린 경우
        resultArea.textContent = '땡';
        input.value = '';
        input.focus();
    }
});
