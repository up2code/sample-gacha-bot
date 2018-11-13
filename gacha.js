var Chance = require('chance');
var chance = new Chance();

var roll = function() {
    return chance.integer({ min: 1, max: 100 })
}

var pull = function() {

    var result = roll();

    if(result == 1 ) {
        return '5 ★ Servant'
    }

    if(result >= 2 && result <= 4) {
        return '4 ★ Servant'
    }

    if(result >= 5 && result <= 44) {
        return '3 ★ Servant'
    }

    if(result >= 45 && result <= 48) {
        return '5 ★ Craft Essence'
    }

    if(result >= 49 && result <= 60) {
        return '4 ★ Craft Essence'
    }

    return '3 ★ Craft Essence';
}

module.exports.roll = roll
module.exports.pull = pull