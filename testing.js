var baseDeck = ["Artemis", "EvoArtemis", "UEvoArtemis", "Tyrra", "Tyran", "Tyrannos", "UltTyrannos", "Plessie", "Plesiel", "Plesios", "UltPlesios", "Brachy", "Brachio", "Brachys", "UltBrachys", "Dryad", "Mandrake", "Alraune", "HeavyMetalDragon", "Zaerog"];
var baseMonsters = ["Tyrra", "Plessie", "Brachy", "Dryad", "GoldenEgg"];
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
var swapping;
var clickedCard;
// $('.deck').text("Deck: " + curDeck);
// curDeck = shuffleDeck(curDeck);
// console.log(curDeck);
// $('.deck2').text("Deck (After shuffle): " + curDeck);


gameStart();
dropAreaSwap();

function gamePart1() {
    activatePhase();
    drawPhase();
}








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
    $('#drop-area1').append('<img src="./cards/' + dropArea1[0] + '.jpg" alt="" class="face-up drop-card1">');
    dropArea2.push(curDeck[0]);
    curDeck.shift();
    $('#drop-area2').append('<img src="./cards/' + dropArea2[0] + '.jpg" alt="" class="face-up drop-card2">');
    dropArea3.push(curDeck[0]);
    curDeck.shift();
    $('#drop-area3').append('<img src="./cards/' + dropArea3[0] + '.jpg" alt="" class="face-up drop-card3">');

    for (let i = 0; i < 5; i++) {
        $('#monster' + (i+1)).append('<img src="./cards/' + baseMonsters[i] + '.jpg" alt="" class="face-up">');
    }
    console.log(curDeck);
    // $('.deck-count').text(curDeck.length);
}


function dropAreaSwap() {
    swapping = true;
    $('.swap-cancel').css('visibility', 'visible');
    showHand();
    $('.hand-cancel').css('visibility', 'hidden');
}

    var swapCardClass1 = '';
    var swapCardClass2 = '';
    var swapCardName1 = '';
    var swapCardName2 = '';
    var swapCardLocation1 = '';
    var swapCardLocation2 = '';

    $(document).on('click', '.face-up', function() {

        viewingCard = $(this).attr("src");
        clickedCard = (viewingCard).toString().slice(viewingCard.toString().indexOf('cards/')+6, viewingCard.toString().indexOf('.jpg'));
        console.log(clickedCard);

        if (swapping) {

            console.log(clickedCard);
            if (swapCardClass1 === '') {
                swapCardName1 = clickedCard;
                console.log(clickedCard);
                console.log(swapCardName1);
                swapCardClass1 = $(this).attr('class').split(' ')[1];
                console.log(swapCardClass1);
                if (swapCardClass1.localeCompare("hand") > 0) {
                    swapCardLocation1 = 'hand[' + (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) - 1) + ']';
                } else {
                    swapCardLocation1 = 'dropArea' + (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) - 1);
                }
            } else if (swapCardClass2 === '') {
                swapCardName2 = clickedCard;
                swapCardClass2 = $(this).attr('class').split(' ')[1];
                if (swapCardClass2.localeCompare("hand") > 0) {
                    swapCardLocation2 = 'hand[' + (parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)) - 1) + ']';
                } else {
                    swapCardLocation2 = 'dropArea' + (parseInt(swapCardClass2.charAt(swapCardClass2.length - 1))) + '[0]';
                }
                // $('.' + swapCardClass1).css('visibility', 'hidden');

            }
        } else {
            viewCard();
        }
        console.log(clickedCard);
        console.log(swapCardClass1);
        console.log(swapCardName1);
        console.log(swapCardLocation1);
        console.log(swapCardClass2);
        console.log(swapCardName2);
        console.log(swapCardLocation2);
    });

function endSwap() {
    swapping = false;
    $('.swap-cancel').css('visibility', 'hidden');
    hideHand();
    gamePart1();
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

    $('hand-card1').on('click', '.face-up', function() {
        console.log("h");
    });

function mainPhase() {}
function puzzlePhase() {}
function attackPhase() {}
function refreshPhase() {}

function showHand() {
    $('.hand-viewer').css('visibility', 'visible');
    $('.hand-viewer').empty();
    $('.hand-viewer').append('<div class="col"></div>');
    for (let i = 0; i < hand.length; i++) {
        $('.hand-viewer').append('<div class="col"><img src="cards/' + hand[i] + '.jpg" alt="" class="face-up hand-card' + (i+1) + '"></div>');
    }
    $('.hand-viewer').append('<div class="col"></div>');

    $('.hand-cancel').css('visibility', 'visible');
}
function hideHand() {
    $('.hand-viewer').css('visibility', 'hidden');
    $('.hand-cancel').css('visibility', 'hidden');
}

function viewCard() {
    $('.viewing-card').attr("src",viewingCard).css('visibility', 'visible');
    $('.skill-trans').css('visibility', 'visible');
}
function hideViewedCard() {
    $('.viewing-card').css('visibility', 'hidden');
    $('.skill-trans').css('visibility', 'hidden');
}

$('.viewing-card').click(function() {
    hideViewedCard();
});
$('.skill-trans').mouseover(function() {
    console.log(clickedCard);
    console.log(cardList[clickedCard].skillDesc);
});