// @ts-nocheck
var body = document.body;
var candidate;
var array = [];
function chooseNumber() {
    candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array = [];
    for (var i = 0; i < 4; i++) {
        var chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
}
chooseNumber();
console.log(array);
var result = document.createElement('p');
body.append(result);
var form = document.createElement('form');
body.append(form);
var input = document.createElement('input');
form.append(input);
input.type = 'text';
input.maxLength = 4;
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);
var wrongCount = 0;
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var answer = input.value;
    if (answer === array.join('')) { // 숫자가 맞으면
        result.textContent = '홈런';
        input.value = '';
        input.focus();
        chooseNumber();
        wrongCount = 0;
    }
    else { // 숫자가 틀리면
        var answerArray = answer.split('');
        var strike = 0;
        var ball = 0;
        wrongCount += 1;
        if (wrongCount > 10) { // 10번 넘게 숫자가 틀리면
            result.textContent = "10\uBC88 \uB118\uAC8C \uD2C0\uB824\uC11C \uC2E4\uD328! \uB2F5\uC740' ".concat(array.join(','), "'\uC785\uB2C8\uB2E4.");
            input.value = '';
            input.focus();
            chooseNumber();
            wrongCount = 0;
        }
        else { // 10번 이하로 숫자가 틀리면
            console.log("답이 틀리면", answerArray);
            for (var i = 0; i < 3; i++) {
                if (Number(answerArray[i]) === array[i]) { // 같은 자리인지 확인
                    console.log('같은 자리');
                    strike += 1;
                }
                else if (array.indexOf(Number(answerArray[i])) > -1) { // 숫자들이 같은 자리는 아니지만 겹치는 경우
                    console.log('겹치는 숫자');
                    ball += 1;
                }
            }
            result.textContent = "".concat(strike, "\uC2A4\uD2B8\uB77C\uC774\uD06C ").concat(ball, "\uBCFC\uC785\uB2C8\uB2E4.");
            input.value = '';
            input.focus();
        }
    }
});
