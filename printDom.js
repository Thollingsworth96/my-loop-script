// my js file.
$(document).ready(function(){
	$("button").click(console.log('clicked'));
		$('p').toggle();
		console.log('clicked');
	
// create a loop to "print out" all elements in the DOM"
//1.create my loop structure how to figure out the length,i.e.,the number of iterations of my loop
//2. how do I access an element from my page...then all elements?
//3. how do I want to print them out? Start on the console.
var allDOMElements = document;
console.log(allDOMElements);
var all = document.getElementsByTagName("*");

for (var i=0, max=all.length; i < max; i++) {
     // Do something with the element here
	console.log('Am i in the loop?');
}
document.onload = doEverything();

console.log('loaded & everything is done');


function doEverything(){
	function barryCatchUp() {
		
	//console.log("...f/n called...");	


		document.querySelector('h1').innerHTML = "Everything Done!";

		$('h1').text("now I', doing jQuery!");

		var elDoc = document;
		console.log(elDoc);
	}

	barryCatchUp();
} //close my doEverything f/n



});
