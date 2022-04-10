interface Card {
  att : number;
  hp : number;
  mine : boolean;
  field : boolean;
  cost? : number;
  hero? : boolean;
}

class Hero implements Card {
  public att : number; // number / undefined
  public hp : number; // number / undefined
  public hero : boolean;
  public field : true;
  public mine : boolean;
  constructor(mine:boolean) {
    this.mine = mine;
    this.att = Math.ceil(Math.random() * 2);
    this.hp = Math.ceil(Math.random() * 5) + 25;
    this.hero = true;
    this.field = true;
  }
}

class Sub implements Card {
  public att : number; // number | undefined
  public hp : number;
  public field : boolean = false;
  public mine : boolean;
  public cost : number;
  constructor(mine:boolean) {
    this.mine = mine;
    this.att = Math.ceil(Math.random() * 5);
    this.hp = Math.ceil(Math.random() * 5);
    this.cost = Math.floor((this.att + this.hp) / 2);
  }
}

interface Player {
  hero : HTMLDivElement,
  deck : HTMLDivElement, // 카드들이 쌓여 있는 것을 'deck'이라고 합니다.
  field : HTMLDivElement,
  cost : HTMLDivElement,
  deckData : Card[],
  heroData : Card | null,
  fieldData : Card[],
  chosenCard : HTMLDivElement | null,
  chosenCardData : Card | null
}

const opponent = {
  hero : document.getElementById('rival-hero') as HTMLDivElement,
  deck : document.getElementById('rival-deck') as HTMLDivElement,
  field : document.getElementById('rival-cards') as HTMLDivElement,
  cost : document.getElementById('rival-cost') as HTMLDivElement,
  deckData : [],
  heroData : null,
  fieldData : [],
  chosenCard : null,
  chosenCardData : null
};

const me = {
  hero : document.getElementById('my-hero') as HTMLDivElement,
  deck : document.getElementById('my-deck') as HTMLDivElement,
  field : document.getElementById('my-cards') as HTMLDivElement,
  cost : document.getElementById('my-cost') as HTMLDivElement,
  deckData : [],
  heroData : null,
  fieldData : [],
  chosenCard : null,
  chosenCardData : null
};