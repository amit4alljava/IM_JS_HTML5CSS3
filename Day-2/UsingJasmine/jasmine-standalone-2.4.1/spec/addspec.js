describe("Add Test Suite", function() {
  

  it("should add two numbers", function() {
    var firstNo = 100;
      var secondNo = 100;
      var result = add(firstNo,secondNo);
      var expectedResult = 1200;
      expect(expectedResult).toBe(result);
  });
    
    it("should add two String numbers", function() {
    var firstNo = "100";
      var secondNo = "100";
      var result = add(firstNo,secondNo);
      var expectedResult = 200;
      expect(expectedResult).toBe(result);
  });
    
});