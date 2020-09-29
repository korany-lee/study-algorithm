// 선형적으로 어케함?...
// 7 / 8
const shuffleDeck = function () {
  let suits = ['♥', '♣', '♠', '♦']; //4
  let values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  let newDeck = [];

  let newSuits = shuffle(suits);
  let newValues = shuffle(values);

  newSuits.forEach(function (suit) {
    newValues.forEach(function (value) {
      newDeck.push(value + suit);
    });
  });
  return newDeck;
};

function shuffle(a) {
  let j, x, i;
  for (let i = a.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
  return a;
  // 무작위로 배열 출력
}
