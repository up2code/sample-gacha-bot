var expect = require('chai').expect
var gacha = require('./../gacha');

describe('Gacha', function() {

  it('should roll and got result in range 1 - 100', function() {
      
    var result = gacha.roll();

    expect(result).to.be.within(1, 100);

  })

    it('should got gacha from pull', function() {
      
      var result = gacha.pull();

        expect(result).to.be.oneOf([
          '5 ★ Servant',
          '4 ★ Servant',
          '3 ★ Servant',
          '5 ★ Craft Essence',
          '4 ★ Craft Essence',
          '3 ★ Craft Essence'
      ]);

    })
});