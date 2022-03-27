var numberOne = Math.ceil(Math.random() * 9);
var numberTwo = Math.ceil(Math.random() * 9);
var result = numberOne * numberTwo;
var word = document.createElement('div');
word.textContent = numberOne + " \uACF1\uD558\uAE30 " + numberTwo;
document.body.append(word);
var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
input.type = 'number';
form.append(input);
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);
var resultArea = document.createElement('div');
document.body.append(resultArea);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (result === Number(input.value)) { // 정답을 맞춘 경우
        resultArea.textContent = '딩동댕';
        numberOne = Math.ceil(Math.random() * 9);
        numberTwo = Math.ceil(Math.random() * 9);
        result = numberOne * numberTwo;
        word.textContent = numberOne + " \uACF1\uD558\uAE30 " + numberTwo;
        input.value = '';
        input.focus();
    }
    else { // 틀린 경우
        resultArea.textContent = '땡';
        input.value = '';
        input.focus();
    }
});
