var baseDeck = ["Artemis", "EvoArtemis", "UEvoArtemis", "Tyrra", "Tyran", "Tyrannos", "UltTyrannos", "Plessie", "Plesiel", "Plesios", "UltPlesios", "Brachy", "Brachio", "Brachys", "UltBrachys"];
var curDeck = baseDeck;
var hand = [];
$('.deck').text("Deck: " + curDeck);
console.log(curDeck);
// console.log(shuffleDeck(curDeck));
curDeck = shuffleDeck(curDeck);
console.log(curDeck);
for (let i = 0; i < 5; i++) {
    hand.push(curDeck[0]);
    // console.log(curDeck[0]);
    curDeck.shift();
}
$('.deck2').text("Deck (After shuffle): " + curDeck);


console.log("cardList = ");
console.log(cardList);

console.log(hand[0]);
console.log(hand);
console.log(cardList);
console.log(cardList.hand);
console.log(cardList.Tyrannos.defense);
// console.log(cardList.hand[0].toString().defense);

for (let i = 0; i <= hand.length; i++) {
    $('.card' + (i + 1)).text("Card " + i + ": " + hand[i]).append('<img src="./cards/' + hand[i] + '.jpg" alt="" class="hand-card"><p>Defense: ' + "h" + '</p>')
}

function shuffleDeck(deck) {
    let shufflingDeck = [];
    let number = deck.length - 1;
    let randIndex = 0;
    for (let i = 0; i <= number; i++) {
        randIndex = Math.ceil(Math.random() * (number-i));
        shufflingDeck.push(deck[randIndex]);
        console.log(deck[randIndex]);
        deck.splice(randIndex,1);
    }
    return shufflingDeck;
}