describe('allFromTown function', function(){
    it('takes regNumbers and returns how many regNumbers for Stellies', function(){
    var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.deepEqual(fromStellies, 3)
        });
       });
