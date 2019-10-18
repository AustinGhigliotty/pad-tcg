// (function () {

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
    var monstersRolled = [0, 0, 0, 0, 0];
    var monstersAttacking = [0, 0, 0, 0, 0];
    var turns = 0;
    var viewingCard;
    var swapping;
    var clickedCard;
    var currentPhase = "";
    var puzzleCardFromDeck;
    var monstersHaveEvolved = [0,0,0,0,0];
    var combosMade = [0,0,0,0,0,0];

    var enemyBaseDeck = ["shynee", "bigShynee", "kingShynee", "ra", "evoRa", "UEvoLightRa", "amaterasu", "evoAmaterasu", "UEvoAmaterasu",
        "mermaid", "siren", "evoSiren", "valkyrie", "evoValkyrie", "UEvoValkyrie", "healerEnhance", "kingGoldDragon", "topalit", "sapphilit",
        "cure", "world", "quickBoost", "redValkyrie", "evoRedValkyrie", "diabolicLanceGungnir", "rubylit", "goldDragon"];
    var enemyBaseMonsters = ["shynee", "mermaid", "valkyrie", "goldenEgg", "goldenEgg"];
    var enemyCurDeck = enemyBaseDeck;
    var enemyHP = [];
    var enemyHand = [];
    var enemyDropArea1 = [];
    var enemyDropArea2 = [];
    var enemyDropArea3 = [];
    var enemyMonstersRolled = [0, 0, 0, 0, 0];
    var enemyMonstersAttacking = [0, 0, 0, 0, 0];
    var enemyTurns = 0;
    var enemyViewingCard;
    var enemySwapping;
    var enemyClickedCard;
    var enemyCurrentPhase = "";
    var enemyPuzzleCardFromDeck;

    gameStart();
    dropAreaSwap();

    function gamePart1() {
        activatePhase();
        drawPhase();
    }

    function gamePart2() {
        mainPhase();
    }


// TODO: ADD SKILL FUNC


// cardList[hand[i]].defense

    function shuffleDeck(deck) {
        let shufflingDeck = [];
        let number = deck.length;
        let randIndex = 0;
        for (let i = 0; i < number; i++) {
            randIndex = Math.floor(Math.random() * (number - i));
            shufflingDeck.push(deck[randIndex]);
            deck.splice(randIndex, 1);
        }
        return shufflingDeck;
    }


    function gameStart() {
        curDeck = shuffleDeck(curDeck);
        curDeck = shuffleDeck(curDeck);
        enemyCurDeck = shuffleDeck(enemyCurDeck);
        enemyCurDeck = shuffleDeck(enemyCurDeck);
        console.log(curDeck);
        for (let i = 0; i < 5; i++) {   // create hp
            HP.push(curDeck[0]);
            curDeck.shift();
        }
        for (let i = 0; i < 5; i++) {   // create enemy hp
            enemyHP.push(enemyCurDeck[0]);
            enemyCurDeck.shift();
        }
        for (let i = 0; i < 5; i++) {   // create hand
            hand.push(curDeck[0]);
            curDeck.shift();
        }
        for (let i = 0; i < 5; i++) {   // create enemy hand
            enemyHand.push(enemyCurDeck[0]);
            enemyCurDeck.shift();
        }


        dropArea1.push(curDeck[0]);     // create drop areas
        curDeck.shift();
        $('#drop-area1').append('<img src="./cards/' + dropArea1[0] + '.jpg" alt="" class="face-up drop-card1 drops">');
        dropArea2.push(curDeck[0]);
        curDeck.shift();
        $('#drop-area2').append('<img src="./cards/' + dropArea2[0] + '.jpg" alt="" class="face-up drop-card2 drops">');
        dropArea3.push(curDeck[0]);
        curDeck.shift();
        $('#drop-area3').append('<img src="./cards/' + dropArea3[0] + '.jpg" alt="" class="face-up drop-card3 drops">');

        enemyDropArea1.push(enemyCurDeck[0]);  // create enemy drop areas
        enemyCurDeck.shift();
        $('#enemy-drop-area1').append('<img src="./cards/' + enemyDropArea1[0] + '.jpg" alt="" class="face-up enemy-drop-card1 drops">');
        enemyDropArea2.push(enemyCurDeck[0]);
        enemyCurDeck.shift();
        $('#enemy-drop-area2').append('<img src="./cards/' + enemyDropArea2[0] + '.jpg" alt="" class="face-up enemy-drop-card2 drops">');
        enemyDropArea3.push(enemyCurDeck[0]);
        enemyCurDeck.shift();
        $('#enemy-drop-area3').append('<img src="./cards/' + enemyDropArea3[0] + '.jpg" alt="" class="face-up enemy-drop-card3 drops">');


        for (let i = 0; i < 5; i++) {
            $('#monster' + (i + 1)).append('<img src="./cards/' + baseMonsters[i] + '.jpg" alt="" class="face-up monster-card' + i + '">');
        }
        for (let i = 0; i < 5; i++) {
            $('#enemy-monster' + (i + 1)).append('<img src="./cards/' + enemyBaseMonsters[i] + '.jpg" alt="" class="face-up enemy-monster-card' + i + '">');
        }

    }


    function dropAreaSwap() {
        swapping = true;
        $('.swap-cancel').css('visibility', 'visible');
        showHand();
        $('.hand-cancel').css('visibility', 'hidden');
    }

    var swapCard1 = '';
    var swapCard2 = '';
    var swapCardClass1 = '';
    var swapCardClass2 = '';
    var swapBackupClass = '';

    var selectedCard = '';
    var selectedCardClass = '';
    var selectedCard2 = '';
    var selectedCardClass2 = '';
    var evoStart = false;

    $(document).on('click', '.face-up', function () {

        viewingCard = $(this).attr("src");
        clickedCard = (viewingCard).toString().slice(viewingCard.toString().indexOf('cards/') + 6, viewingCard.toString().indexOf('.jpg'));
        console.log(clickedCard);

        // TODO: ADD COST
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
                        hand[parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) - 1] = hand[parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)) - 1];
                        $('.hand-card' + (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)))).attr("src", $('.hand-card' + (parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)))).attr("src"));
                    } else if (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) === 1) {
                        dropArea1[0] = hand[parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)) - 1];
                        $('.drop-card1').attr("src", $('.hand-card' + (parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)))).attr("src"));
                    } else if (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) === 2) {
                        dropArea2[0] = hand[parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)) - 1];
                        $('.drop-card2').attr("src", $('.hand-card' + (parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)))).attr("src"));
                    } else if (parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) === 3) {
                        dropArea3[0] = hand[parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)) - 1];
                        $('.drop-card3').attr("src", $('.hand-card' + (parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)))).attr("src"));
                    }
                    hand[parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)) - 1] = swapCard1;
                    $('.hand-card' + (parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)))).attr("src", swapBackupClass);

                } else if (parseInt(swapCardClass2.charAt(swapCardClass2.length - 1)) === 1) {

                    if (swapCardClass1.localeCompare("hand") > 0) {
                        hand[parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) - 1] = dropArea1[0];
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
                        hand[parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) - 1] = dropArea2[0];
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
                        hand[parseInt(swapCardClass1.charAt(swapCardClass1.length - 1)) - 1] = dropArea3[0];
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

        } else if (currentPhase === "Main") {
            if (selectedCard === '' && $(this).attr('class').split(' ')[1].localeCompare("hand") > 0 && cardList[clickedCard].cardType === "Monster") {
                evoStart = true;
                selectedCardClass = $(this).attr('class').split(' ')[1];
                selectedCard = clickedCard;
                hideHand();
                $('.main-cancel').css('visibility', 'visible');

            } else if (selectedCard2 === '' && selectedCard !== '' && $(this).attr('class').split(' ')[1].localeCompare("monster") > 0) {
                selectedCardClass2 = $(this).attr('class').split(' ')[1];
                if (cardList[clickedCard].name === cardList[selectedCard].evosFrom) {
                    if (cardList[selectedCard].evoCost !== "" && hand.indexOf(cardList[selectedCard].evoCost) < 0) {
                        console.log("You are missing the required evolution material: " + cardList[selectedCard].evoCost);
                        selectedCardClass = '';
                        selectedCard2 = '';
                        selectedCardClass2 = '';
                        mainCancel();

                    } else if ( monstersHaveEvolved[((selectedCardClass2.charAt(selectedCardClass2.length-1))-1)] === 1 ) {
                        console.log("This monster has already evolved this turn");

                    } else {
                        console.log("evolve");
                        var evolvedMonster = hand.splice((parseInt(selectedCardClass.charAt(selectedCardClass.length - 1)) - 1), 1).toString();
                        console.log(evolvedMonster);
                        baseMonsters[(parseInt(selectedCardClass2.charAt(selectedCardClass2.length - 1)) - 1)] = evolvedMonster;
                        monstersHaveEvolved[(parseInt(selectedCardClass2.charAt(selectedCardClass2.length - 1)) - 1)] = 1;
                        $('.monster-card' + (parseInt(selectedCardClass2.charAt(selectedCardClass2.length - 1)))).attr("src", $('.hand-card' + (parseInt(selectedCardClass.charAt(selectedCardClass.length - 1)))).attr("src"));
                        selectedCardClass = '';
                        selectedCard2 = '';
                        selectedCardClass2 = '';
                        mainCancel();
                    }
                } else {
                    console.log("incompatible evolution");
                    selectedCardClass2 = '';
                }
            }

        } else {
            if (currentPhase !== "Puzzle" || !($(this).attr('class').split(' ')[1].localeCompare("drop") > 0)) {
                viewCard();
            }
        }
    });

    function mainCancel() {
        selectedCard = '';
        evoStart = false;
        showHand();
        $('.main-cancel').css('visibility', 'hidden');
    }

    function endSwap() {
        swapping = false;
        $('.swap-cancel').css('visibility', 'hidden');
        hideHand();
        gamePart1();
    }

    function endMain() {
        $('.end-main').css('visibility', 'hidden');
        puzzlePhase();
    }


    $(document).on('click', '.deck', function () {
        if (currentPhase === "Puzzle" && puzzleCardFromDeck === false) {
            viewingCard = 'cards/' + curDeck[0] + '.jpg';
            clickedCard = curDeck[0];
            viewCard();
        }
    });

    $(document).on('click', '.drops', function () {
        if (currentPhase === "Puzzle" && puzzleCardFromDeck === false) {
            puzzleCardFromDeck = true;
            $('.deck').css('src', 'cards/back.jpg');
            let selectedDropArea = $(this).attr('class').split(' ')[1];
            if (parseInt(selectedDropArea.charAt(selectedDropArea.length - 1)) === 1) {
                dropArea1.push(curDeck[0]);
            } else if (parseInt(selectedDropArea.charAt(selectedDropArea.length - 1)) === 2) {
                dropArea2.push(curDeck[0]);
            } else if (parseInt(selectedDropArea.charAt(selectedDropArea.length - 1)) === 3) {
                dropArea3.push(curDeck[0]);
            }
            curDeck.shift();
            dropRefresh();
            checkCombos();
            $('.end-puzzle').css('visibility', 'visible');
        }
    });

    function checkCombos() {
        for (let h = 0; h <= 2; h++) {
            let numberOfDrops = [0, 0, 0, 0, 0, 0];
            let drops = [];
            // for (let i = 0; i <= 2; i++) {
                for (let j = 0; j < (eval('dropArea' + (h + 1))).length; j++) {
                    console.log(cardList[eval('dropArea' + (h + 1))[j]].drops);
                    for (let k = 0; k < (cardList[eval('dropArea' + (h + 1))[j]].drops).length; k++) {
                        drops.push(cardList[eval('dropArea' + (h + 1))[j]].drops[k]);
                    }
                }
                console.log(drops);
            // }
            for (let i = 0; i < drops.length; i++) {
                if (drops[i] === 'Fire') {numberOfDrops[0]++}
                if (drops[i] === 'Water') {numberOfDrops[1]++}
                if (drops[i] === 'Wood') {numberOfDrops[2]++}
                if (drops[i] === 'Light') {numberOfDrops[3]++}
                if (drops[i] === 'Dark') {numberOfDrops[4]++}
                if (drops[i] === 'Heal') {numberOfDrops[5]++}
            }
            for (let i = 0; i <= 5; i++) {
                if (numberOfDrops[i] >= 3) {
                    combosMade[i] = 1;
                    console.log(combosMade);
                }
            }
            if (Math.max(...combosMade) > 0) {
                console.log('h: ' + h);
                h = 3;
                console.log('h: ' + h);
            }
        }
    }

    function endPuzzle() {
    }


// TODO: make this when rolling monsters works --------------------------------------------------
    function activatePhase() {
        currentPhase = "Activate";
        turns++;
        alert("Turn " + turns + "!");
        monstersHaveEvolved = [0,0,0,0,0];
        if (monstersRolled.indexOf(1) === -1) {
            for (let i = 0; i < 5; i++) {
                if (monstersRolled[i] === 1) {
                    console.log(i);
                }
            }
        }
    }

    function drawPhase() {
        currentPhase = "Draw";
        hand.push(curDeck[0]);
        curDeck.shift();
        gamePart2();
    }

    function mainPhase() {
        currentPhase = "Main";
        $('.end-main').css('visibility', 'visible');
    }

    function puzzlePhase() {
        currentPhase = "Puzzle";
        puzzleCardFromDeck = false;
        $('.deck').attr('src', 'cards/' + curDeck[0] + '.jpg');
    }

    function attackPhase() {
        currentPhase = "Attack";
    }

    function refreshPhase() {
        currentPhase = "Refresh";
    }

    function showHand() {
        if (!evoStart) {
            $('.hand-viewer').css('visibility', 'visible');
            $('.hand-viewer').empty();
            $('.hand-viewer').append('<div class="col"></div>');
            for (let i = 0; i < hand.length; i++) {
                $('.hand-viewer').append('<div class="col"><img src="cards/' + hand[i] + '.jpg" alt="" class="face-up hand-card' + (i + 1) + '"></div>');
            }
            $('.hand-viewer').append('<div class="col"></div>');

            $('.hand-cancel').css('visibility', 'visible');
            if (currentPhase === "Main") {
                $('.end-main').css('visibility', 'hidden');
            }
        }
    }

    function hideHand() {
        $('.hand-viewer').css('visibility', 'hidden');
        $('.hand-cancel').css('visibility', 'hidden');
        if (currentPhase === "Main" && selectedCard === '') {
            $('.end-main').css('visibility', 'visible');
        }
    }

    function viewCard() {
        $('.viewing-card').attr("src", viewingCard).css('visibility', 'visible');
        // $('.skill-trans').css('visibility', 'visible');
        $('.monster-info').css('visibility', 'visible');
        if (currentPhase === "Main") {
            $('.end-main').css('visibility', 'hidden');
        }
        $('.monster-info').empty();
        $('.monster-info').append('<p>' + cardList[clickedCard].name + '</p>');
        if (cardList[clickedCard].evosFrom !== undefined) {
            $('.monster-info').append('<p>Evolves from ' + cardList[clickedCard].evosFrom + '</p>');
        }
        if (cardList[clickedCard].skillDesc !== undefined) {
            $('.monster-info').append('<p>Skill: (' + cardList[clickedCard].skillType + ') ' + cardList[clickedCard].skillDesc + '</p>');
        }
    }

    function hideViewedCard() {
        $('.viewing-card').css('visibility', 'hidden');
        // $('.skill-trans').css('visibility', 'hidden');
        $('.monster-info').css('visibility', 'hidden');
        if (currentPhase === "Main") {
            $('.end-main').css('visibility', 'visible');
        }
    }

    $('.viewing-card').click(function () {
        hideViewedCard();
    });

// $('.skill-trans').hover(function(){
//         $(this).append('<p>' + cardList[clickedCard].skillDesc + '</p>');
//     },
//     function(){
//         $(this).empty();
//     });
// $('.skill-trans').mouseover(function() {
    // console.log(clickedCard);
    // console.log(cardList[clickedCard].skillDesc);
// });

    function dropRefresh() {
        $('#drop-area1').empty();
        $('#drop-area2').empty();
        $('#drop-area3').empty();
        for (let i = 0; i < dropArea1.length; i++) {
            if (i === 0) {
                $('#drop-area1').append('<img src="./cards/' + dropArea1[i] + '.jpg" alt="" class="face-up drop-card1 drops">');
            } else {
                $('#drop-area1').append('<img src="./cards/' + dropArea1[i] + '.jpg" alt="" class="face-up drop-extras1 drops" style="top: ' + (i * 15) + 'px; left: 15px; position: absolute">');
            }
        }
        for (let i = 0; i < dropArea2.length; i++) {
            if (i === 0) {
                $('#drop-area2').append('<img src="./cards/' + dropArea2[i] + '.jpg" alt="" class="face-up drop-card2 drops">');
            } else {
                $('#drop-area2').append('<img src="./cards/' + dropArea2[i] + '.jpg" alt="" class="face-up drop-extras2 drops" style="top: ' + (i * 15) + 'px; left: 15px; position: absolute">');
            }
        }
        for (let i = 0; i < dropArea3.length; i++) {
            if (i === 0) {
                $('#drop-area3').append('<img src="./cards/' + dropArea3[i] + '.jpg" alt="" class="face-up drop-card3 drops">');
            } else {
                $('#drop-area3').append('<img src="./cards/' + dropArea3[i] + '.jpg" alt="" class="face-up drop-extras3 drops" style="top: ' + (i * 15) + 'px; left: 15px; position: absolute">');
            }
        }
    }


// })();
