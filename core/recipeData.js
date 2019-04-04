let soondubu = "<ul><li>Tofu</li><li>Kimchi</li><li>Eggs</li><li>Pork</li><li>Onions</li></li></ul>";
let carbonara = "<ul><li>Fettucini<li><li>Egg Yolk</li><li>Cheese</li><li>Olive Oil</li><li>Bacon</li></ul>";
let beef = ["Beef Brisket", "Cilantro", "Egg Noodles", "Ginger", "Red Chili"];
let sushi = ["Rice", "Seaweed", "Cucumber", "Fish", "Avocado"];

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
