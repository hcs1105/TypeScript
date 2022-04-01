let imgCoords = '0';

interface RSP {
  readonly scissors : '0', 
  readonly rock : '-147px', 
  readonly paper : '-294px', 
};

const rsp : RSP = {
  scissors : '0', // 가위의 X 좌표
  rock : '-147px', // 바위의 X 좌표
  paper : '-294px' // 보의 X 좌표
};

const score = {
  scissors : 1, 
  rock : 0, 
  paper : -1 
} as const;

function computerChoice(imgCoords : RSP[keyof RSP]) : keyof RSP {
  return (Object.keys(rsp) as ['scissors', 'rock', 'paper']).find((k) => rsp[k] === imgCoords)!;
}

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', function(){
    const myChoice = this.textContent;
    const myScore = score[myChoice];
    const computerScore = score[computerChoice()];
    const diff = myScore - computerScore;
    if(diff === 0) {
      console.log('비겼습니다.');
    } else if([-1,2].indexOf(diff)) {
      console.log('이겼습니다.');
    } else {
      console.log('졌습니다.');
    }
  });
});