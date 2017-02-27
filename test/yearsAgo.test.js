describe('yearsAgo function', function(){
    it('takes in a year and returns how many years ago it was', function(){
      var currentDate = new Date();
      var currentYear = currentDate.getFullYear();
      //var yearDiff = currentYear - 1976;
      var expectedResult= currentYear - 1976;
      var functionResult = yearsAgo(1976);
          assert.equal(functionResult,expectedResult);

        });
       });
