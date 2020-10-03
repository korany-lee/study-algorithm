const shuffleDeck = function (deck) {
  const resultArr = [];

  for (let i = deck.length; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * deck.length);
    resultArr.push(deck[randomIndex]);
    deck.splice(randomIndex, 1);
  }
  return resultArr;
};

// 테스트의 편의를 위해 "정렬 상태 카드덱 생성기"를 제공해 드리겠습니다!
// (이 함수를 마음껏 변경하셔도 됩니다. 이 함수의 원본이 테스트 파일에도 또 있으니까요)
const orderedDeck = function () {
  let suits = ["♥", "♣", "♠", "♦"];
  let values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let deck = [];

  suits.forEach(function (suit) {
    values.forEach(function (value) {
      deck.push(value + suit);
    });
  });

  return deck;
};
