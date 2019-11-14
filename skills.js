function checkEvoSkill() {
    if (evolvedMonster !== '' && cardList[evolvedMonster].skillType.indexOf('Evolve') > -1 && cardList[evolvedMonster].skillDesc !== '') {
        if (cardList[evolvedMonster].skillType.indexOf("/")) {
            console.log(cardList[evolvedMonster].skillDesc.split(" / ")[cardList[evolvedMonster].skillType.split(" / ").indexOf("Evolve")]);

            // if (cardList[evolvedMonster].skillType.split(" / ")) {
            //
            // }
        }
    }
}

function checkActivateSkill() {
    // this one's gonna be complex
}

function checkDefenseSkill() {
    // needs to happen after opponent attacks but before you take damage
}

function checkDamageSkill() {
    // just check cards got from hp
}

function checkPermanentSkill() {
    // not sure about this one
}

function checkUseSkill() {
    // also gonna be complex just bc of how many different skills there are
}


// var skillList =
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, take the top card of your deck and put it in your Drop Area.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, you can choose up to 2 cards from your hand and place them in your drop area.",' +
// '"skillType": "Awakening",' + '             "skillDesc": "When you place this card to evolve one of your monsters, you can choose up to 2 cards from your hand and place them in your drop area.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Damage",' + '                "skillDesc": "If you draw this card from your HP when you take damage, you can evolve a monster into this monster",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Damage",' + '                "skillDesc": "If you draw this card from your HP when you take damage, you can evolve a monster into this monster",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Damage",' + '                "skillDesc": "If you draw this card from your HP when you take damage, you can evolve a monster into this monster",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Damage",' + '                "skillDesc": "If you draw this card from your HP when you take damage, you can evolve a monster into this monster",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Damage",' + '                "skillDesc": "If you draw this card from your HP when you take damage, you can evolve a monster into this monster",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, take the top card of your deck and put it in your Drop Area.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match 6 combos, roll one of your opponent\'s Wood monsters.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, take the top card of your deck and put it in your Drop Area.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match 6 combos, roll one of your opponent\'s Fire monsters.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, take the top card of your deck and put it in your Drop Area.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match 6 combos, roll one of your opponent\'s Water monsters.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, take the top card of your deck and put it in your Drop Area.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 4 combos in your Puzzle Phase, activate one of your Light monsters.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, take the top card of your deck and put it in your Drop Area.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 4 combos in your Puzzle Phase, activate one of your Dark monsters.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "--------------------",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "--------------------------------------------",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, take the top card of your deck and put it in your Drop Area.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "------------------",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "----------------------------",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, all of your Dragon type monsters get +1 damage until the end of your turn.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, activate all of your Dragon type monsters.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "This monster can guard against multiple monsters.",' +
// '"skillType": "Activate",' + '              "skillDesc": "At the beginning of your turn, this monster becomes Active.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 6 combos in your Puzzle Phase, roll one of your opponent\'s monsters with 500 or less defense.",' +
// '"skillType": "Activate",' + '              "skillDesc": "At the beginning of your turn, this monster becomes Active.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 5 or more combos in your Puzzle Phase, activate 2 of your monsters.",' +
// '"skillType": "Activate",' + '              "skillDesc": "At the beginning of your turn, this monster becomes Active.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 6 combos in your Puzzle Phase, at the end of your Refresh Phase, take the top card of your deck and put it in your drop area.",' +
// '"skillType": "Activate",' + '              "skillDesc": "At the beginning of your turn, this monster becomes Active.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 5 or more combos in your Puzzle Phase, at the end of your Refresh Phase, you can choose 1 card from your hand and swap it with a card from your drop area.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match a fire combo, draw a card.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, devolve one of your opponent\'s monsters with 600 or less defense.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match a water combo, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "At the beginning of your turn, this monster becomes Active.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match a wood combo, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 6 combos in your Puzzle Phase, at the end of your Refresh Phase, you can choose a card from your hand and put it in your drop area.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match a light combo, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "-------------------------------------",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match a dark combo, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "When you take damage, choose a random card from your opponent\'s hand and discard it.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, deal 1 damage to your opponent.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 6 combos in your Puzzle Phase, deal 1 damage to your opponent.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, choose one of your opponent\'s drop areas with 2 or more cards and discard all but one card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 5 or more combos in your Puzzle Phase, discard a card from your opponent\'s drop area",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, devolve one of your opponent\'s wood monsters.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, devolve one of your opponent\'s fire monsters.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, devolve one of your opponent\'s water monsters.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, devolve one of your opponent\'s dark monsters.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, devolve one of your opponent\'s light monsters.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match a fire combo, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match a water combo, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match a wood combo, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match a light combo, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match a dark combo, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 6 combos during your Puzzle Phase, all of your Dragon type Monsters get +1 damage",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, devolve all monsters with 500 or less defense.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Choose a fire monster from your hand and evolve it for 1 less cost.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Choose a water monster from your hand and evolve it for 1 less cost.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Choose a wood monster from your hand and evolve it for 1 less cost.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Choose a light monster from your hand and evolve it for 1 less cost.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Choose a dark monster from your hand and evolve it for 1 less cost.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Take the top card of your deck. If that card is a fire type card, put it in your hand. If not, put it in your drop area.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Take the top card of your deck. If that card is a water type card, put it in your hand. If not, put it in your drop area.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Take the top card of your deck. If that card is a wood type card, put it in your hand. If not, put it in your drop area.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Take the top card of your deck. If that card is a light type card, put it in your hand. If not, put it in your drop area.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Take the top card of your deck. If that card is a dark type card, put it in your hand. If not, put it in your drop area.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Discard a card from one of your opponent\'s drop areas",' +
// '"skillType": "Defense",' + '               "skillDesc": "(You can use this card when defending against your opponent\'s attack) Activate one of your monsters.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Roll one of your opponent\'s monsters with 600 or less defense.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Take a Dragon type monster from your discard pile and put it in your hand.",' +
// '"skillType": "Damage",' + '                "skillDesc": "If you draw this card from your HP when you take damage, you can discard 2 cards and heal 1 HP",' +
// '"skillType": "Use",' + '                   "skillDesc": "Choose 1 card from your hand and swap it with a card from your drop area.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Choose 1 card from your discard pile and put it in your hand.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Choose 1 card from your hand and put it in your drop area.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, all of your Attacker type monsters get 1 extra combo.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, all of your Physical type monsters get 1 extra combo.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, all of your Balanced type monsters get 1 extra combo.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, all of your Healer type monsters get 1 extra combo.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, all of your Devil type monsters get 1 extra combo.",' +
// '"skillType": "Activate",' + '              "skillDesc": "At the beginning of your turn, this monster becomes Active.",' +
// '"skillType": "Activate",' + '              "skillDesc": "At the beginning of your turn, this monster becomes Active.",' +
// '"skillType": "Activate",' + '              "skillDesc": "At the beginning of your turn, this monster becomes Active.",' +
// '"skillType": "Activate",' + '              "skillDesc": "At the beginning of your turn, this monster becomes Active.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, activate all of your Dragon type monsters.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, all of your Balanced type monsters get +300 attack until the end of your turn.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, all of your God type monsters get +300 attack until the end of your turn.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, take the top card of your deck and put it in your Drop Area.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, all of your opponent\'s monsters get 100 defense until the end of your turn.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, all of your opponent\'s monsters get 200 defense until the end of your turn.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, take the top card of your deck and put it in your Drop Area.",' +
// '"skillType": "Activate",' + '              "skillDesc": "When your HP reaches 0, put this card in your HP (face-down)",' +
// '"skillType": "Activate",' + '              "skillDesc": "When you take damage, you can negate 1 damage each time you discard 2 cards.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, take the top card of your deck and put it in your Drop Area.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "You don\'t take damage from monsters with 200 or less attack.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "You don\'t take damage from monsters with 300 or less attack.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, take the top card of your deck and put it in your Drop Area.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, if you have less than 5 HP, recover 1 HP.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, recover HP until you have 5 HP.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, take the top card of your deck and put it in your Drop Area.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, you can exchange as many cards between your hand and your drop area as you like.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, you can add as many cards from your hand to your drop area.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, take the top card of your deck and put it in your Drop Area.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 4 or more combos in your Puzzle Phase, activate 1 of your Fire monsters.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 4 or more combos in your Puzzle Phase, activate 2 of your Fire or Wood monsters.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, take the top card of your deck and put it in your Drop Area.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 4 or more combos in your Puzzle Phase, activate 1 of your Water monsters.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 4 or more combos in your Puzzle Phase, activate 2 of your Fire or Water monsters.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, take the top card of your deck and put it in your Drop Area.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 4 or more combos in your Puzzle Phase, activate 1 of your Wood monsters.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 4 or more combos in your Puzzle Phase, activate 2 of your Water or Wood monsters.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match a fire combo, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match 5 or more combos, this monster attacks twice in your Attack Phase.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match a water combo, draw a card.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw cards until you have 5 cards in your hand.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match a wood combo, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "At the end of your main phase, you can choose a card from your hand and put it in the drop area.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match a light combo, draw a card.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, devolve 2 of your opponent\'s monsters.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match a dark combo, draw a card.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, your opponent discards all cards from their hand.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "If your revealed card has a fire drop and a dark drop in your drop start step, reveal a card from the top of the deck and place it in the drop area at the end of the drop start step.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "If your revealed card has a water drop and a dark drop in your drop start step, reveal a card from the top of the deck and place it in the drop area at the end of the drop start step.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "If your revealed card has a wood drop and a dark drop in your drop start step, reveal a card from the top of the deck and place it in the drop area at the end of the drop start step.",' +
// '"skillType": "Damage",' + '                "skillDesc": "If you draw this card from your HP when you take damage, you can evolve a monster into this monster.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match 6 combos, devolve one of your opponent\'s monsters with 500 or less defense.",' +
// '"skillType": "Damage",' + '                "skillDesc": "If you draw this card from your HP when you take damage, you can evolve a monster into this monster.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match 6 combos, roll one of your opponent\'s monsters.",' +
// '"skillType": "Damage",' + '                "skillDesc": "If you draw this card from your HP when you take damage, you can evolve a monster into this monster.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match 6 combos, choose a random card from your opponent\'s hand and discard it.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Draw a card.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Devolve one of your monsters.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Look at the top 3 cards of your deck. Choose one card and put it in your hand, and discard the others.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Choose a Fire card in your hand and use it for 1 less cost.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Choose a Water card in your hand and use it for 1 less cost.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Choose a Wood card in your hand and use it for 1 less cost.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Choose a Light card in your hand and use it for 1 less cost.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Choose a Dark card in your hand and use it for 1 less cost.",' +
// '"skillType": "Use",' + '                   "skillDesc": "All of your Attacker type monsters get +200 attack until the end of your turn.",' +
// '"skillType": "Use",' + '                   "skillDesc": "All of your Physical type monsters get +200 attack until the end of your turn.",' +
// '"skillType": "Use",' + '                   "skillDesc": "All of your Balanced type monsters get +200 attack until the end of your turn.",' +
// '"skillType": "Use",' + '                   "skillDesc": "All of your Healer type monsters get +200 attack until the end of your turn.",' +
// '"skillType": "Use",' + '                   "skillDesc": "All of your Devil type monsters get +200 attack until the end of your turn.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Devolve one of your opponent\'s monsters with 700 or less defense.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Choose one of your opponent\'s monsters. That monster loses 200 defense until the end of your turn.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Take a God type monster from your discard pile and put it in your hand.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Your opponent discards a card from their hand.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, take the top card of your deck and put it in your Drop Area.",' +
// '"skillType": "Damage",' + '                "skillDesc": "If you draw this card from your HP when you take damage, you can put this card in your drop area",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, take the top card of your deck and put it in your Drop Area.",' +
// '"skillType": "Damage",' + '                "skillDesc": "If you draw this card from your HP when you take damage, you can put this card in your drop area",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, take the top card of your deck and put it in your Drop Area.",' +
// '"skillType": "Damage",' + '                "skillDesc": "If you draw this card from your HP when you take damage, you can put this card in your drop area",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, take the top card of your deck and put it in your Drop Area.",' +
// '"skillType": "Damage",' + '                "skillDesc": "If you draw this card from your HP when you take damage, you can put this card in your drop area",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, take the top card of your deck and put it in your Drop Area.",' +
// '"skillType": "Damage",' + '                "skillDesc": "If you draw this card from your HP when you take damage, you can put this card in your drop area",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match a fire combo, draw a card.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "If this monster is Active, it gets +1 damage.",' +
// '"skillType": "Activate",' + '              "skillDesc": "At the beginning of your attack phase, you can discard any number of cards with fire drops from your hand. If you do, this monster gets 1 extra combo for each card discarded until the end of the turn.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match a water combo, draw a card.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "If this monster is Active, it gets +1 damage.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, recover 1 HP. Then, activate all of your monsters.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match a wood combo, draw a card.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "If this monster is Active, it gets +1 damage.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, devolve all of your opponent\'s monsters with 500 or less defense.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match a light combo, draw a card.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "If this monster is Active, it gets +1 damage.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 5 or more combos in your Puzzle Phase, choose one of your opponent\'s monsters. That monster loses 200 defense until the end of your turn.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle Phase, if you match a dark combo, draw a card.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "If this monster is Active, it gets +1 damage.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, choose up to 2 cards from your discard pile. Put 1 card in your hand and 1 card in your drop area.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "If this monster guards against an opponent\'s Light monster, this monster gets +500 defense until the end of their turn",' +
// '"skillType": "Permanent",' + '             "skillDesc": "If this monster guards against an opponent\'s Wood monster, this monster gets +500 defense until the end of their turn",' +
// '"skillType": "Permanent",' + '             "skillDesc": "If this monster guards against an opponent\'s Dark monster, this monster gets +500 defense until the end of their turn",' +
// '"skillType": "Permanent",' + '             "skillDesc": "If this monster guards against an opponent\'s Water monster, this monster gets +500 defense until the end of their turn",' +
// '"skillType": "Permanent",' + '             "skillDesc": "If this monster guards against an opponent\'s Fire monster, this monster gets +500 defense until the end of their turn",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "At the beginning of your turn, this monster becomes Active.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle phase, if you make a Fire, Wood, and Light combo, all of your monsters get 1 extra combo until the end of your turn.",' +
// '"skillType": "Activate",' + '              "skillDesc": "When you take damage, activate this monster.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "You don\'t take damage from rolled monsters with 500 or less attack.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle phase, if you make a Water, Wood, and Dark combo, all of your monsters get 1 extra combo until the end of your turn.",' +
// '"skillType": "Activate",' + '              "skillDesc": "You don\'t take damage from rolled monsters with 700 or less attack.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "At the beginning of your turn, this monster becomes Active.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle phase, if you make a Wood, Light, and Dark combo, all of your monsters get 1 extra combo until the end of your turn.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your guard declaration step, you can discard 2 cards to activate this monster.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle phase, if you make a Fire, Water, Wood, and Light combo, this monster gets +1 damage until the end of your turn.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, deal damage to your opponent equal to half of their remaining HP (rounded down).",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "If this monster deals damage to the opponent, they discard cards from their HP instead of putting them in their hand.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle phase, if you make a Fire, Water, and Dark combo, all of your monsters get 1 extra combo until the end of your turn.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "If this monster deals damage to the opponent, they discard cards from their HP instead of putting them in their hand.",' +
// '"skillType": "",' + '                      "skillDesc": "",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle phase, if you make a Fire and Heal combo, draw a card at the end of your Puzzle Phase.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle phase, if you make a Water and Heal combo, draw a card at the end of your Puzzle Phase.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle phase, if you make a Wood and Heal combo, draw a card at the end of your Puzzle Phase.",' +
// '"skillType": "",' + '                      "skillDesc": "",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle phase, if you make a Light and Heal combo, draw a card at the end of your Puzzle Phase.",' +
// '"skillType": "Activate",' + '              "skillDesc": "During your Puzzle phase, if you make a Dark and Heal combo, draw a card at the end of your Puzzle Phase.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "If your remaining HP is 3 or less, this monster gets +1 damage.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "If your remaining HP is 3 or less, this monster gets +300 attack and +1 damage.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, all of your Dragon type monsters get +300 attack until the end of your turn.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Search your discard pile for a monster card and put it in your hand.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Search your discard pile for a Fire monster and put it in your hand.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Search your discard pile for a Water monster and put it in your hand.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Search your discard pile for a Wood monster and put it in your hand.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Search your discard pile for a Light monster and put it in your hand.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Search your discard pile for a Dark monster and put it in your hand.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Choose 1 of your Fire monsters. That monster gets 1 extra combo.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Choose 1 of your Water monsters. That monster gets 1 extra combo.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Choose 1 of your Wood monsters. That monster gets 1 extra combo.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Choose 1 of your Light monsters. That monster gets 1 extra combo.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Choose 1 of your Dark monsters. That monster gets 1 extra combo.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Until the end of the turn, whenever your opponent takes damage, discard a card from your opponent\'s drop area.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Until the end of the turn, whenever your opponent takes damage, draw a card.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Choose one of your drop areas and discard all cards from that drop area. Then, reveal the same number of cards that you discarded from the top of your deck and place them in the selected drop area.",' +
// '"skillType": "Damage",' + '                "skillDesc": "If you draw this card from your HP when you take damage, you can pay for it and use it. You choose 2 monsters and activate them.",' +
// '"skillType": "Use",' + '                   "skillDesc": "Until the end of the turn, whenever your opponent takes damage, they discard a card from their hand.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, choose a Devil type monster from your discard pile and put it in your hand.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, choose a Devil type monster from your discard pile and put it in your hand.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, choose a Devil type monster from your discard pile and put it in your hand.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, choose a Devil type monster from your discard pile and put it in your hand.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "When you place this card to evolve one of your monsters, choose a Devil type monster from your discard pile and put it in your hand.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 5 or more combos in your Puzzle Phase, choose 1 of your Fire monsters. That monster gets +100 attack until the end of your turn.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 5 or more combos in your Puzzle Phase, choose 1 of your Water monsters. That monster gets +100 attack until the end of your turn.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 5 or more combos in your Puzzle Phase, choose 1 of your Wood monsters. That monster gets +100 attack until the end of your turn.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 4 or more combos in your Puzzle Phase, choose 1 of your Wood monsters. That monster gets +200 attack until the end of your turn.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 5 or more combos in your Puzzle Phase, choose 1 of your Light monsters. That monster gets +100 attack until the end of your turn.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 5 or more combos in your Puzzle Phase, choose 1 of your Dark monsters. That monster gets +100 attack until the end of your turn.",' +
// '"skillType": "Activate",' + '              "skillDesc": "Whenever you make 4 or more combos in your Puzzle Phase, choose 1 of your Dark monsters. That monster gets +200 attack until the end of your turn.",' +
// '"skillType": "Activate",' + '              "skillDesc": "At the beginning of your turn, this monster becomes Active.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "While this monster is Active, your opponent\'s Wood monsters cannot guard against this monster.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "While this monster is Active, your opponent\'s Wood monsters cannot guard against this monster.",' +
// '"skillType": "Activate",' + '              "skillDesc": "At the beginning of your turn, this monster becomes Active.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "While this monster is Active, your opponent\'s Fire monsters cannot guard against this monster.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "While this monster is Active, your opponent\'s Fire monsters cannot guard against this monster.",' +
// '"skillType": "Activate",' + '              "skillDesc": "At the beginning of your turn, this monster becomes Active.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "While this monster is Active, your opponent\'s Water monsters cannot guard against this monster.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "While this monster is Active, your opponent\'s Water monsters cannot guard against this monster.",' +
// '"skillType": "Activate",' + '              "skillDesc": "At the beginning of your turn, this monster becomes Active.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "While this monster is Active, your opponent\'s Dark monsters cannot guard against this monster.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "While this monster is Active, your opponent\'s Dark monsters cannot guard against this monster.",' +
// '"skillType": "Activate",' + '              "skillDesc": "At the beginning of your turn, this monster becomes Active.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "While this monster is Active, your opponent\'s Light monsters cannot guard against this monster.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "While this monster is Active, your opponent\'s Light monsters cannot guard against this monster.",' +
// '"skillType": "Permanent",' + '             "skillDesc": " / At the beginning of your turn, this monster becomes Active.",' +
// '"skillType": "Permanent",' + '             "skillDesc": "-----------------------------------------------While this monster is Active, your opponent\'s unevolved monsters cannot guard against this monster.-------------------------------",' +
// '"skillType": "Defense / Permanent",' + '   "skillDesc": "------------------------------------------------While this monster is Active, your opponent\'s monsters with 500 or less Defense cannot guard against this monster.",' +
// '"skillType": "Permanent",' + '             "skillDesc": " / ",' +
// '"skillType": "Permanent",' + '             "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Defense / Activate",' + '    "skillDesc": "-----------------------------------------------------------------------------",' +
// '"skillType": "Defense / Activate",' + '    "skillDesc": " / At the beginning of your turn, this monster becomes Active.",' +
// '"skillType": "Activate",' + '              "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Defense / Permanent",' + '   "skillDesc": " / ",' +
// '"skillType": "Activate",' + '              "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Defense / Evolve",' + '      "skillDesc": " / When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Activate",' + '              "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Evolve",' + '                "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Defense / Evolve",' + '      "skillDesc": " / When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Activate",' + '              "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Activate",' + '              "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Defense / Evolve",' + '      "skillDesc": " / When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Activate",' + '              "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Evolve",' + '                "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Evolve",' + '                "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Defense / Evolve",' + '      "skillDesc": " / When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Activate",' + '              "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Activate",' + '              "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Defense / Evolve",' + '      "skillDesc": " / When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Activate",' + '              "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Activate",' + '              "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Activate",' + '              "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Defense / Evolve",' + '      "skillDesc": " / When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Activate",' + '              "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Activate",' + '              "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Defense / Evolve",' + '      "skillDesc": " / When you place this card to evolve one of your monsters, draw a card from your deck.",' +
// '"skillType": "Evolve",' + '                "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Activate",' + '              "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Permanent",' + '             "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Activate",' + '              "skillDesc": "------------------------------------------------------------------------------",' +
// '"skillType": "Defense",' + '               "skillDesc": "",';




// TODO for "all" maybe just put 5
var evolist =
    'draw card(s)' +                                        'draw - 2' +
    'put deck card(s) in drop area' +                       'deck to drop - 1' +
    'put hand card(s) in drop area (include exchange)' +    'hand to drop - 1 / hand drop exchange' +
    'activate x monsters' +                                 'activate - 2 - dragon' +
    'devolve opponent\'s monsters' +                        'devolve - 1 - fire' +
    'deal damage' +                                         'deal damage - 1 / deal damage - half' +
    'combo boost' +                                         'combo boost - 1 - light' +
    'damage boost' +                                        'damage boost - 1 - dragon' +
    'attack boost' +                                        'attack boost - 200 - devil' +
    'defense boost' +                                       'defense boost - 200 - all' +
    'heal' +                                                'heal - 1 / heal - half' +
    'opponent discards cards' +                             'op discard - 1 - (hand/drop area) - (op choose / you choose)' +
    'take card from discard pile' +                         'take discard - 1 - god';

var activatelist =
    'roll opponent\'s monster(s)' +                         'roll - 1 - fire - 5 combos' +
    'activate monsters' +                                   'activate - 2 - dragon' +
    'draw card(s)' +                                        'draw - 2' +
    'opponent discard card(s) (from hand or drop area)' +   'op discard - 1 - (hand/drop area) - (op choose / you choose)' +
    'deal damage' +                                         'deal damage - 1 / deal damage - half' +
    'combo boost' +                                         'combo boost - 1 - light' +
    'damage boost' +                                        'damage boost - 1 - dragon' +
    'attack boost' +                                        'attack boost - 200 - devil' +
    'defense boost' +                                       'defense boost - 200 - all' +
    'resolve (EvoOrochi)' +                                 'resolve' +
    'negate damage (UOrochi)' +                             'negate damage - 1 - 2 cards' +
    'attack twice' +                                        'attack twice - 5 combos' +
    'put hand card(s) in drop area' +                       'hand to drop - 1 / hand drop exchange' +
    'devolve opponent\'s monster(s)' +                      'devolve - 1 - fire' +
    'activate this monster in guard dec. step' +            'activate in guard - discard 2 cards' +
    'discard cards for combos' +                            'discard cards for combos - 1 fire card = 1 combo' +
    'put another card in drop area after first step' +      'extra drop card from deck - 1' +
    'this monster stays active' +                           'stay active';

var defenselist =
    'activate monster(s)' +                                 'activate - 1';

var damagelist =
    'evo this monster' +                                    'evolve this' +
    'heal' +                                                'heal - 1 - discard 2 cards' +
    'put card in drop area' +                               'put in drop area';

var permalist =
    'guard against multiple monsters' +                     'multiguard' +
    'void damage' +                                         'block damage - 300- - (rolled)' +
    'damage boost' +                                        'damage boost - 1' +
    'defense boost (for certain attributes)' +              'defense boost - against fire' +
    'opponent discards hp instead of drawing it' +          'discard op hp' +
    'attack boost' +                                        'attack boost - 300' +
    'prevent blocking this monster' +                       'prevent block - wood';

var uselist =
    'evo for less cost' +                                       'evo for less cost - 1' +
    'use for less cost' +                                       'use for less cost - 1' +
    'draw card(s)' +                                            'draw - 2' +
    'put card(s) in drop area' +                                'hand to drop - 1 / hand drop exchange' +
    'discard from opponent\'s hand/drop area' +                 'op discard - 1 - (hand/drop area) - (op choose / you choose)' +
    'roll monsters' +                                           'roll - 1 - fire' +
    'devolve monsters' +                                        'devolve - 1 - fire' +
    'take cards from discard pile' +                            'take from discard pile - 1 - god' +
    'swap cards from hand w/ drop area' +                       'hand drop exchange - 1' +
    'look at deck cards, choose one and discard the others' +   'look at deck cards - 3 - take 1 - discard 2' +
    'look at hp, choose one and put the others back' +          'look at hp - take 1' +
    'stat boost/drop' +                                         'attack boost - 200 - attacker' +
    'whenever your opponent takes damage, draw a card/they discard a card/discard a card from their drop area' +
                                                                'when op takes damage - draw' +
    'replace all cards of one drop area' +                      'drop refresh';