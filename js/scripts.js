var initialPrompt = prompt ("Enter a simple sentence");

//perform second function
var takeFirstLast = function () {
return (initialPrompt.charAt(0) + initialPrompt.charAt(initialPrompt.length-1)).toUpperCase();
};

//return the first anc second characters of the second function
//var notReverse = function () {return takeFirstLast(); }

var reverse = function() {
  return takeFirstLast().split("").reverse().join("");
};

//Create a third function that will reverse the top two functions above  and concatenate them with the initialPrompt
var callTwo = function() {return initialPrompt + reverse();
};

//create a fourth function to count the number of leters in the original sentence divide by 2 and round to a whole number
var countLetters = function(counter) { return initialPrompt.charAt(Math.floor(counter.length/2)) + callTwo(); };
/** Some secondary function to apply method to initialPrompt
alert(countLetters(initialPrompt));  **/
//alert(countLetters(initialPrompt));

var finalResult = alert(reverse(countLetters()))
