let soondubu = "<ul><li>Tofu</li><li>Kimchi</li><li>Eggs</li></ul>";
let carbonara = "<ul><li>Fettucini<li><li>Egg Yolk</li><li><li>Cheese</li>";
let beef = ["Beef Brisket", "Cilantro", "Egg Noodles"];
let sushi = ["Rice", "Seaweed", "Cucumber", "Fish"];

module.exports ={
  getSDB: function() {
    console.log("called: getSDB");
    return soondubu;
  },
  getCarbonara: function() {
    console.log("called: getCarbonara");
    return carbonara;
  },
  getBeef: function() {
    console.log("called: getBeef");
    return beef;
  },
  getSushi: function() {
    console.log("called: getSushi");
    return sushi;
  }



};
  var someOtherFunction = function () {
    console.log("Can't touch this!");
  }
