var baseDeck = ["artemis", "evoArtemis", "UEvoArtemis", "tyrra", "tyran", "tyrannos", "ultTyrannos", "plessie", "plesiel", "plesios",
    "ultPlesios", "brachy", "brachio", "brachys", "ultBrachys", "dryad", "mandrake", "alraune", "heavyMetalDragon", "zaerog", "zeus",
    "evoZeus", "rubylit", "sapphilit", "emelit", "topalit", "amelit", "cure", "world"];
var baseMonsters = ["tyrra", "plessie", "brachy", "dryad", "goldenEgg"];
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
function gamePart2() {
    mainPhase();
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


    dropArea1.push(curDeck[0]);     // create drop areas
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
    // $('.deck-count').text(curDeck.length);

}


function dropAreaSwap() {
    swapping = true;
    $('.swap-cancel').css('visibility', 'visible');
    showHand();
    $('.hand-cancel').css('visibility', 'hidden');
}

    // var swapCardName1 = '';
    // var swapCardName2 = '';
    // var swapCardLocation1 = '';
    // var swapCardLocation2 = '';

    var swapCard1 = '';
    var swapCard2 = '';
    var swapCardClass1 = '';
    var swapCardClass2 = '';
    // var swapBackup = '';
    var swapBackupClass = '';

    $(document).on('click', '.face-up', function() {

        viewingCard = $(this).attr("src");
        clickedCard = (viewingCard).toString().slice(viewingCard.toString().indexOf('cards/')+6, viewingCard.toString().indexOf('.jpg'));
        console.log(clickedCard);

        if (swapping) {

            if (swapCard1 === '') {
                swapCard1 = clickedCard;
                swapCardClass1 = $(this).attr('class').split(' ')[1];
                swapBackupClass = viewingCard;

            } else {
                swapCard2 = viewingCard;
                swapCardClass2 = $(this).attr('class').split(' ')[1];
                if (swapCardClass2.localeCompare("hand") > 0) {

                    if (swapCardClass1.localeCompare("hand") > 0) {
                        hand[parseInt(swapCardClass1.charAt(swapCardClass1.length - 1))-1] = hand[parseInt(swapCardClass2.charAt(swapCardClass2.length - 1))];
                        $('.hand-card' + (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)))).attr("src", $('.hand-card' + (parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)))).attr("src"));
                    } else if (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) === 1) {
                        dropArea1[0] = hand[parseInt(swapCardClass2.charAt(swapCardClass2.length - 1))-1];
                        $('.drop-card1').attr("src", $('.hand-card' + (parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)))).attr("src"));
                    } else if (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) === 2) {
                        dropArea2[0] = hand[parseInt(swapCardClass2.charAt(swapCardClass2.length - 1))-1];
                        $('.drop-card2').attr("src", $('.hand-card' + (parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)))).attr("src"));
                    } else if (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) === 3) {
                        dropArea3[0] = hand[parseInt(swapCardClass2.charAt(swapCardClass2.length - 1))-1];
                        $('.drop-card3').attr("src", $('.hand-card' + (parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)))).attr("src"));
                    }
                    hand[parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)) - 1] = swapCard1;
                    $('.hand-card' + (parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)))).attr("src", swapBackupClass);

                } else if (parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)) === 1) {

                    if (swapCardClass1.localeCompare("hand") > 0) {
                        hand[parseInt(swapCardClass1.charAt(swapCardClass1.length - 1))-1] = dropArea1[0];
                        $('.hand-card' + (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)))).attr("src", $('.drop-card1').attr("src"));
                    } else if (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) === 1) {
                        dropArea1[0] = dropArea1[0];

                    } else if (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) === 2) {
                        dropArea2[0] = dropArea1[0];
                        $('.drop-card2').attr("src", $('.drop-card1').attr("src"));
                    } else if (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) === 3) {
                        dropArea3[0] = dropArea1[0];
                        $('.drop-card3').attr("src", $('.drop-card1').attr("src"));
                    }
                    dropArea1[0] = swapCard1;
                    $('.drop-card1').attr("src", swapBackupClass);

                } else if (parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)) === 2) {

                    if (swapCardClass1.localeCompare("hand") > 0) {
                        hand[parseInt(swapCardClass1.charAt(swapCardClass1.length - 1))-1] = dropArea2[0];
                        $('.hand-card' + (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)))).attr("src", $('.drop-card2').attr("src"));
                    } else if (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) === 1) {
                        dropArea1[0] = dropArea2[0];
                        $('.drop-card1').attr("src", $('.drop-card2').attr("src"));
                    } else if (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) === 2) {
                        dropArea2[0] = dropArea2[0];

                    } else if (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) === 3) {
                        dropArea3[0] = dropArea2[0];
                        $('.drop-card3').attr("src", $('.drop-card2').attr("src"));
                    }
                    dropArea2[0] = swapCard1;
                    $('.drop-card2').attr("src", swapBackupClass);

                } else if (parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)) === 3) {
                    if (swapCardClass1.localeCompare("hand") > 0) {
                        hand[parseInt(swapCardClass1.charAt(swapCardClass1.length - 1))-1] = dropArea3[0];
                        $('.hand-card' + (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)))).attr("src", $('.drop-card3').attr("src"));
                    } else if (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) === 1) {
                        dropArea1[0] = dropArea3[0];
                        $('.drop-card1').attr("src", $('.drop-card3').attr("src"));
                    } else if (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) === 2) {
                        dropArea2[0] = dropArea3[0];
                        $('.drop-card2').attr("src", $('.drop-card3').attr("src"));
                    } else if (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) === 3) {
                        dropArea3[0] = dropArea3[0];

                    }
                    dropArea3[0] = swapCard1;
                    $('.drop-card3').attr("src", swapBackupClass);

                }
                swapCard1 = '';
                swapCard2 = '';
                swapCardClass1 = '';
                swapCardClass2 = '';
                swapBackupClass = '';
            }

        } else {
            viewCard();
        }
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

function mainPhase() {

}
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