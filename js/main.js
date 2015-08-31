(function () {


  var ele = document.getElementById("form");
  
  if(ele.addEventListener){
    ele.addEventListener("submit", reload, false);  //Modern browsers
  } 
  else if (ele.attachEvent){
    ele.attachEvent('onsubmit', reload);            //Old IE
  }

  function reload() {
    window.location.reload();
    console.log("reloaded");
    drawChart();
  };

  // visualisation 

  var results = document.getElementById("results"),
    width =  results.offsetWidth, 
    height = width/2, 
    susan = 0, 
    camile = 0,
    largest = 0,
    padding = 2, 
    data, 
    arr, 
    svg, 
    scale, 
    line, 
    rect, 
    text, 
    horizLabel;

  var requestData = function() {

  }();
  
  d3.json("data.json", function(error, json) {

    var submissions = document.getElementById("submissions");

    if (error) {
      console.log(error);
    }
    data = json;

    for(var i = 0; i < data.length; i++) {
      if(data[i].name === "Susan") {
        susan += 1; 
      }
      if(data[i].name === "Camile") {
        camile += 1; 
      } 
    }
    arr = [];
    arr.push(susan);
    arr.push(camile);

    largest = d3.max(arr);

        
    var addSubmissions = function() {
      return arr[0] + arr[1];
    };

    submissions.innerHTML = addSubmissions();

    drawChart();
  
  });

  var drawChart = function() {
    svg = d3.select(results)
      .append("svg")
      .attr({
        "width": width,
        "height": width
      });

    scale = d3.scale.linear()
      .domain([0, largest])
      .range([0, height]);

    // the bars 
    rect = svg.selectAll("rect")
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
          return "#D2D7D3";
        }
      });

      // labels
      text = svg.selectAll("text")
        .data(arr)
        .enter()
        .append("text")
        .text(function(d){
          return d; 
        })
        .attr({
          "x" : function (d,i) {
            return i * (width / arr.length) + ((width / arr.length)/2);
          }, 
          "y" : function (d) {
            return   height - scale(d) + 30;       
          }, 
          "text-anchor" : "middle"
      });

      // an x axis 
      line = svg.append("line")
        .attr({
          "x1" : 0, 
          "x2" : width - padding,
          "y1" : height, 
          "y2" : height
        });

      // horizontal labels
      horizLabel = svg.selectAll("g:text")
        .data(arr)
        .enter()
        .append("g")
        .append("text");


  };

  var resize = function() {
    width =  results.offsetWidth; 
    height = width/2; 

    scale
      .range([0, height]);
    
    rect.attr({
      "width": width/arr.length - padding,
      "height": function (d) {
        return scale(d); 
      }, 
      "x" : function (d,i) {
        return i * (width / arr.length);
      }, 
      "y" : function (d) {
        return  height - scale(d); 
      }
    });

    text.attr({
      "x" : function (d,i) {
        return i * (width / arr.length) + ((width / arr.length)/2);
      }, 
      "y" : function (d) {
        return   height - scale(d) + 30;
      }
    });

    line.attr({
      "x1" : 0, 
      "x2" : width - padding,
      "y1" : height, 
      "y2" : height
    });

  };

  window.onresize = resize; 

})();

