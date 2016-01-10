var bubbleSortFunction = require("../bubblesort.js")
describe("A suite", function() {
  it("is a function", function() {
    expect(typeof bubbleSortFunction).toBe("function");
  });
  it("takes an array of integers as parameter", function() {
    // var args = Array.prototype.slice.call(arguments);
    // expect(Array.isArray(args)).toBe(true);
  });
  it("uses a utility function that swaps two items in an array", function() {
    // bubbleSortFunction.toContain(swap);
    // expect(typeof swap).toBe("function");
  });
  it("iterates through the array until there are no more swap per iteration", function() {
    
  });
  it("sorts an array in ascending order", function() {
    expect(bubbleSortFunction([6,5,4,3,2,1])).toEqual([1,2,3,4,5,6]);
  });
});
