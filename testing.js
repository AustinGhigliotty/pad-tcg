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

var cardList;
// $.getJSON( "./cardList", function( json ) {
//     console.log( "JSON Data received, name is " + json.monsters.Artemis.name);
//     console.log(json);
//     cardList = json;
//     console.log(cardList);
//     console.log( "JSON Data received, name is " + cardList.monsters.Artemis.cardNumber);
// });



setTimeout(function(){ console.log(cardList); }, 3000);
console.log(cardList);
// console.log( "JSON Data received, name is " + cardList.monsters.Artemis.name);
// console.log( "JSON Data received, name is " + json.monsters.curDeck[0].cardNumber);


for (let i = 0; i <= hand.length; i++) {
    $('.card' + (i + 1)).text("Card " + i + ": " + hand[i])
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