const shuffleDeck = function (deck) {
  for (let i = deck.length - 1; i > 0; i--) { 
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
};

const shuffleDeck = function (deck) {
  for (let i = deck.length - 1; i > 0; i--) { 
    let j = Math.floor(Math.random() * i)
    [deck[i], deck[j]] = [deck[j], deck[i]]; // 와....;
  }
  return deck;
};

// 테스트의 편의를 위해 "정렬 상태 카드덱 생성기"를 제공해 드리겠습니다!
// (이 함수를 마음껏 변경하셔도 됩니다. 이 함수의 원본이 테스트 파일에도 또 있으니까요)
const orderedDeck = function () {
  let suits = ['♥', '♣', '♠', '♦'];
  let values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  let deck = [];

  suits.forEach(function (suit) {
    values.forEach(function (value) {
      deck.push(value + suit);
    });
  });

  return deck;
};
