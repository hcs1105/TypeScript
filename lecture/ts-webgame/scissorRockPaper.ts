let imgCoords : RSP[keyof RSP] = '0';

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
  scissors : 1, // 가위의 점수
  rock : 0, // 바위의 점수
  paper : -1 // 보의 점수
} as const;

let interval: number;
let point: number;

function computerChoice(imgCoords : RSP[keyof RSP]) : keyof RSP {
  return (Object.keys(rsp) as ['scissors', 'rock', 'paper']).find((k) => rsp[k] === imgCoords)!;
}

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', function(this : HTMLButtonElement, e : Event){
    clearInterval(interval);
    setInterval(intervalMaker, 2000);

    const myChoice = this.id as keyof RSP;
    const myScore = score[myChoice];
    const computerScore = score[computerChoice(imgCoords)]; // computerChoice(imgCoords)의 리턴값 : keyof RSP
    const diff = myScore - computerScore;
    if(diff === 0) {
      console.log('비겼습니다.');
    } else if([-1,2].includes(diff)) {
      console.log('이겼습니다.');
      point++;
    } else {
      console.log('졌습니다.');
      point--;
    }
    document.querySelector('#point').textContent = point;
  });
});

function intervalMaker() {
  interval = setInterval(function(){
    if(imgCoords === rsp.scissors) {
      imgCoords = rsp.rock;
    } else if(imgCoords === rsp.rock) {
      imgCoords = rsp.paper;
    } else {
      imgCoords = rsp.scissors;
    }
    if(document.querySelector('#computer')) {
      (document.querySelector('#computer') as HTMLDivElement).style.background = `url(images/srp.png) ${imgCoords} 0`;
    }
  }, 100);  
}

intervalMaker();