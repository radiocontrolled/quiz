(function () {

 //  var button = document.getElementsByTagName("input")[2];
 //  var key, value = 0;

	// // process user input
	// var processUserInput = function() {
 //    var radioButtons = document.getElementsByName("author");
 //    for (var i = 0; i < radioButtons.length; i++ ) {
 //      if (radioButtons[i].checked === true) {
 //        key = radioButtons[i].id;
 //        value++;
 //        console.log(key);
 //        console.log(value);
       
 //      }
 //    }
 //  };

 //  // add click event listener
 //  button.addEventListener("click", function (e) {
 //    e.preventDefault();
 //    processUserInput();
 //  });

 //  // add keydown listener for enter or spacebar
 //  button.addEventListener("keydown", function (e) {
 //    e = e || window.event;
 //    var key = e.which || e.keyCode;
 //    if ((key == 13) || (key ==32)) { 
 //        e.preventDefault();
 //        processUserInput();
 //    }
 //  });

  // visualisation 

  var results = document.getElementById("results"),
  data, 
  width =  results.offsetWidth;

  var visData = [{name: "Susan", count: 0},{name: "Camile", count: 0}];
  
  d3.json("data.json", function(error, json) {
    if (error) {
      return console.warn(error);
    }
    data = json;
    drawChart();

     for(var key in data){
      if(data[key]["name"] === "Susan") {
        visData[0]["count"] += 1;
      }
      if(data[key]["name"] === "Camile") {
        visData[1]["count"] += 1;
      }
    }
   
  });



  var drawChart = function() {
    var svg; 
    svg = d3.select(results)
      .append("svg")
      .attr({
        "width": width,
        "height": width
      });
  }

 


})();

