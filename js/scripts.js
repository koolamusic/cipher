var initialPrompt = prompt ("Enter a simple sentence");

//perform second function
var takeFirstLast = function () {
return (initialPrompt.charAt(0) + initialPrompt.charAt(initialPrompt.length-1)).toUpperCase();
};

//return the first anc second characters of the second function
//var notReverse = function () {return takeFirstLast(); }

var reverse = function(reverseId) {
  return reverseId.split("").reverse().join("");
};

//variable to run reverse on reverseId on takeFirstLast function variable
//var rVerse = alert(reverse(takeFirstLast()));

//Create a third function that will reverse the top two functions above  and concatenate them with the initialPrompt
var callTwo = function() {return initialPrompt + reverse(takeFirstLast());
};

//create a fourth function to count the number of leters in the original sentence divide by 2 and round to a whole number
var countLetters = function(counter) { return initialPrompt.charAt(Math.floor(counter.length/2)) + callTwo(); };

/** Some secondary function to apply method to initialPrompt
alert(countLetters(initialPrompt));  **/
//alert(countLetters(initialPrompt));

// Make alert for function to output all exercise information
var makeReverse = function() {
  return reverse(countLetters(initialPrompt));
};


// Write jQuery function here..
$(document).ready(function() {
  // function for div class 1
  $("#par1").click(function()	{
		alert(initialPrompt);
	});

  // function for div class 2
  $("#par2").click(function()	{
		alert(makeReverse());
	});

});
