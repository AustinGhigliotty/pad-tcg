var baseDeck = ["Artemis", "EvoArtemis", "UEvoArtemis", "Tyrra", "Tyran", "Tyrannos", "UltTyrannos", "Plessie", "Plesiel", "Plesios", "UltPlesios", "Brachy", "Brachio", "Brachys", "UltBrachys"];
var baseMonsters = ["Tyrra", "Plessie", "Brachy", "GoldenEgg", "GoldenEgg"];
var curDeck = baseDeck;
var HP = [];
var hand = [];
var dropArea1 = [];
var dropArea2 = [];
var dropArea3 = [];
var monstersRolled = [0,0,0,0,0];
var monstersAttacking = [0,0,0,0,0];
var turns = 0;
var viewingCard;
// $('.deck').text("Deck: " + curDeck);
// curDeck = shuffleDeck(curDeck);
// console.log(curDeck);
// $('.deck2').text("Deck (After shuffle): " + curDeck);



gameStart();









// cardList[hand[i]].defense

function shuffleDeck(deck) {
    let shufflingDeck = [];
    let number = deck.length - 1;
    let randIndex = 0;
    for (let i = 0; i <= number; i++) {
        randIndex = Math.ceil(Math.random() * (number-i));
        shufflingDeck.push(deck[randIndex]);
        deck.splice(randIndex,1);
    }
    return shufflingDeck;
}


function gameStart() {
    curDeck = shuffleDeck(curDeck);
    for (let i = 0; i < 5; i++) {   // create hp
        HP.push(curDeck[0]);
        curDeck.shift();
    }
    for (let i = 0; i < 5; i++) {   // create hand
        hand.push(curDeck[0]);
        curDeck.shift();
    }

    console.log(hand[0]);
    console.log(hand[1]);
    console.log(hand[2]);
    console.log(hand[3]);
    console.log(hand[4]);


    dropArea1.push(curDeck[0]);
    curDeck.shift();
    $('#drop-area1').append('<img src="./cards/' + dropArea1[0] + '.jpg" alt="" class="face-up">');
    dropArea2.push(curDeck[0]);
    curDeck.shift();
    $('#drop-area2').append('<img src="./cards/' + dropArea2[0] + '.jpg" alt="" class="face-up">');
    dropArea3.push(curDeck[0]);
    curDeck.shift();
    $('#drop-area3').append('<img src="./cards/' + dropArea3[0] + '.jpg" alt="" class="face-up">');

    for (let i = 0; i < 5; i++) {
        $('#monster' + (i+1)).append('<img src="./cards/' + baseMonsters[i] + '.jpg" alt="" class="face-up">');
    }
    console.log(curDeck);
    // $('.deck-count').text(curDeck.length);
}


// TODO: make this when rolling monsters works --------------------------------------------------
function activatePhase() {
    turns++;
    alert("Turn " + turns + "!");
    if (monstersRolled.indexOf(1) === -1) {
        for (let i = 0; i < 5; i++) {
            if (monstersRolled[i] === 1) {
                console.log(i);
            }
        }
    }
}

function drawPhase() {
    hand.push(curDeck[0]);
    curDeck.shift();
}

function mainPhase() {}
function puzzlePhase() {}
function attackPhase() {}
function refreshPhase() {}

function showHand() {
    $('.hand-viewer').css('visibility', 'visible');
    $('.hand-viewer').empty();
    $('.hand-viewer').append('<div class="col"></div>');

    for (let i = 0; i < hand.length; i++) {
        $('.hand-viewer').append('<div class="col"><img src="cards/' + hand[i] + '.jpg" alt="" class="hand-card' + (i+1) + ' face-up"></div>');
    }

    $('.hand-viewer').append('<div class="col"></div>');

    // $('.hand-card1').attr("src","cards/" + hand[0] + ".jpg");
    // $('.hand-card2').attr("src","cards/" + hand[1] + ".jpg");
    $('.hand-cancel').css('visibility', 'visible');
}
function hideHand() {
    $('.hand-viewer').css('visibility', 'hidden');
    $('.hand-cancel').css('visibility', 'hidden');
}

function viewCard() {
    $('.viewing-card').attr("src",viewingCard).css('visibility', 'visible');
}
function hideViewedCard() {
    $('.viewing-card').css('visibility', 'hidden');
}
$('.face-up').click(function() {
    viewingCard = $(this).attr("src");
    viewCard();
});
$('.viewing-card').click(function() {
    hideViewedCard();
});