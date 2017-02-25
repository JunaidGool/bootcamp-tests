
  describe('isFromBellville function', function(){
    it('returns all registrations from Bellville', function(){
      var expectedResult = true
      var functionResult = isFromBellville ("CY 123");
          assert.equal(functionResult,expectedResult)
        });
       });
