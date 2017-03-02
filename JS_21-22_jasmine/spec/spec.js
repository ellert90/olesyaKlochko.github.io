
var testInfo = require('../js/app.js');
describe("testInfo", function() {

  it("it should call typeof testInfo", function() {
//prepare
      var result;
//act
      result = typeof testInfo;
//assert
      expect(result).toEqual("object");
        });
});


var answers = require('../js/app.js');
describe("answers", function() {

  it("it should call typeof answers", function() {
    //prepare
    var result;
    //act
    result = typeof answers;
    //assert
    expect(result).toEqual("object");
      });

});

var page = require('../js/app2.js');
describe("page", function() {

    it("it should call function", function() {
    //prepare
         var result;
    //act
         result = typeof page;
    //assert
         expect(result).toEqual("function");
           });

});

var compareArr = require('../js/app4.js');
describe("compareArr", function() {

    it("it should call compareArr result", function() {
    //prepare
         var result;
    //act
         result = compareArr();
    //assert
         expect(result).toEqual(true);
           });

});
