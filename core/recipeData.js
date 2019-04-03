let soondubu = "<ul><li>Tofu</li><li>Kimchi</li><li>Eggs</li></ul>";
//let carbonara = "<ul><li>Fettucini<li><li>Egg Yolk</li><li><li>Cheese</li>";
//let beef = ["Beef Brisket", "Cilantro", "Egg Noodles"];
let sushi = ["Rice", "Seaweed", "Cucumber", "Fish"];

module.exports ={
  getHTML: function() {
    console.log("called: Soondubu");
    return soondubu;
  },
  getCarbonara: function() {
    console.log("called: Carbonara");
    return carbonara;
  },
  getJSON: function() {
    console.log("called: Beef");
    return beef;
  },
  getSushi: function() {
    console.log("called: Sushi");
    return beef;
  }



}
  var someOtherFunction = function () {
    console.log("Can't touch this!");
