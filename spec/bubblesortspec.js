var bubbleSortFunction = require("../bubblesort.js")
describe("A suite", function() {
  
  it("keeps a sorted array sorted", function() {
    expect(bubbleSortFunction([1,2])).toEqual([1,2]);
  });

  it("sorts an unsorted list of two", function() {
    expect(bubbleSortFunction([2,1])).toEqual([1,2]);
  });

  it("sorts a partially sorted list of three", function() {
    expect(bubbleSortFunction([1,3,2])).toEqual([1,2,3]);
  });

  it("sorts a completely unsorted list of three", function() {
    expect(bubbleSortFunction([3,2,1])).toEqual([1,2,3]);
  });
  
});
