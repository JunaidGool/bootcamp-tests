describe('regCheck', function(){
    it('checks if a regNum is for GP,L,EC,MP', function(){
      var expectedResultTrue = true;
      var expectedResultFalse = false;
      var isGP = regCheck('DV 23 NB GP', 'GP');
      var isMP = regCheck('DV 23 LP GP', 'MP');
      var isBellville = regCheck('CY189-012', 'CY');
      var isDurban = regCheck('CY189-012', 'ND');

      assert.equal(isGP,expectedResultTrue);
      assert.equal(isMP,expectedResultFalse);
      assert.equal(isBellville,expectedResultFalse);
      assert.equal(isDurban,expectedResultFalse);

        });
       });
