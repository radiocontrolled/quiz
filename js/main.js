(function () {

  var button = document.getElementById("submit");

	// process user input
	var processUserInput = function() {
    var radioButtons = document.getElementsByName("author");
    for (var i = 0; i < radioButtons.length; i++ ) {
      if (radioButtons[i].checked === true) {
        console.log(radioButtons[i].id);
      }
    }
  };

  // add click event listener
  button.addEventListener("click", function (e) {
    e.preventDefault();
    processUserInput();
  });

  // add keydown listener for enter or spacebar
  button.addEventListener("keydown", function (e) {
    e = e || window.event;
    var key = e.which || e.keyCode;
    if ((key == 13) || (key ==32)) { 
        e.preventDefault();
        processUserInput();
    }
  });

	// send the user input to the server

})();
