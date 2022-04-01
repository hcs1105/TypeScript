var imgCoords = 0;
var rsp = {
    scissors: '0',
    rock: '-147px',
    paper: '-294px' // 보의 X 좌표
};
var score = {
    scissors: 1,
    rock: 0,
    paper: -1
};
function computerChoice(imgCoords) {
    return Object.keys(rsp).find(function (k) { return rsp[k] === imgCoords; });
}
document.querySelectorAll('button').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var myChoice = this.textContent;
        var myScore = score[myChoice];
        var computerScore = score[computerChoice()];
        var diff = myScore - computerScore;
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
