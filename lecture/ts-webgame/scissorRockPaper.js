"use strict";
let imgCoords = '0';
;
const rsp = {
    scissors: '0',
    rock: '-147px',
    paper: '-294px' // 보의 X 좌표
};
const score = {
    scissors: 1,
    rock: 0,
    paper: -1
};
function computerChoice(imgCoords) {
    return Object.keys(rsp).find((k) => rsp[k] === imgCoords);
}
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const myChoice = this.textContent;
        const myScore = score[myChoice];
        const computerScore = score[computerChoice(imgCoords)]; // computerChoice(imgCoords)의 리턴값 : keyof RSP
        const diff = myScore - computerScore;
        if (diff === 0) {
            console.log('비겼습니다.');
        }
        else if ([-1, 2].indexOf(diff)) {
            console.log('이겼습니다.');
        }
        else {
            console.log('졌습니다.');
        }
    });
});
