(function () {

  // visualisation 

  var results = document.getElementById("results"),
  width =  results.offsetWidth, 
  height = width/2, 
  largest = 0, 
  padding = 2, 
  data, 
  arr; 

  var visData = [{name: "Susan", count: 0},{name: "Camile", count: 0}];
  
  d3.json("testData.json", function(error, json) {
    if (error) {
      console.log(error);
    }
    data = json;
 
    arr = [];
 
    // get the largest score 
    // for the scale domain 
    for(var key in data){
      if(data.hasOwnProperty(key)){
        if(data[key].value >= largest) {
          largest = data[key].value;      
        }
      }  
      arr.push(data[key].value);
    }

    drawChart();
  
  });



  var drawChart = function() {
    var svg, scale; 
    svg = d3.select(results)
      .append("svg")
      .attr({
        "width": width,
        "height": width
      });

    scale = d3.scale.linear()
      .domain([0, largest])
      .range([0, height]);

    svg.selectAll("rect")
      .data(arr)
      .enter()
      .append("rect")
      .attr({
        "width": width/arr.length - padding,
        "height": function (d) {
          return scale(d); 
        }, 
        "x" : function (d,i) {
          return i * (width / arr.length);
        }, 
        "y" : function (d) {
          return  height - scale(d); 
        }, 
        "fill" :  function (d) {
          return "rgb(243, 156, " + (d * 6) + ")";
        }
      });
  };

  var resize = function() {
    // resize stuff
  }

  window.onresize = resize; 

 


})();

