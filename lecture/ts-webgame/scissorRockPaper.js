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
    paper: -1 // 보의 점수
};
let interval;
let point;
function computerChoice(imgCoords) {
    return Object.keys(rsp).find((k) => rsp[k] === imgCoords);
}
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function (e) {
        clearInterval(interval);
        setInterval(intervalMaker, 2000);
        const myChoice = this.id;
        const myScore = score[myChoice];
        const computerScore = score[computerChoice(imgCoords)]; // computerChoice(imgCoords)의 리턴값 : keyof RSP
        const diff = myScore - computerScore;
        if (diff === 0) {
            console.log('비겼습니다.');
        }
        else if ([-1, 2].includes(diff)) {
            console.log('이겼습니다.');
            point++;
        }
        else {
            console.log('졌습니다.');
            point--;
        }
        document.querySelector('#point').textContent = point;
    });
});
function intervalMaker() {
    interval = setInterval(function () {
        if (imgCoords === rsp.scissors) {
            imgCoords = rsp.rock;
        }
        else if (imgCoords === rsp.rock) {
            imgCoords = rsp.paper;
        }
        else {
            imgCoords = rsp.scissors;
        }
        if (document.querySelector('#computer')) {
            document.querySelector('#computer').style.background = `url(images/srp.png) ${imgCoords} 0`;
        }
    }, 100);
}
intervalMaker();
