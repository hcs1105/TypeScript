interface Card {
  att : number,
  health : number,
  cost : number
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