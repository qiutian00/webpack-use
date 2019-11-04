// require("!style-loader!css-loader!./main.css");
require("./main.css");
let $ = require("jquery");

let testArrayLet = ["a", "test"];

console.log("$:" + $);

$(document).ready(function() {
  // $("body").append("<div class='container'>垂直居中模块</div>");
});

// alert(require("./js/people.js"));
console.log(require("./js/people.js"));
