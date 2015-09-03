<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Quiz</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
        <style>
            body {
                padding-top: 50px;
                padding-bottom: 20px;
            }
        </style>

        <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="bower_components/jquery/dist/jquery.min.js"></script>
        <script src="bower_components/d3/d3.min.js"></script>
    </head>
    <body>

    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Quiz</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
        </div><!--/.navbar-collapse -->
      </div>
    </nav>

    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-6">
          <h2>Who do you prefer?</h2>
          <!-- <form action="form.php" method="post" id="form" > -->
          <form id="form" > 
            <fieldset>
              <legend>Choose your favourite option:</legend>
              <label>Susan <input type="radio" name="author" id="Susan" value="Susan"></label><br/>
              <label>Camile <input type="radio" name="author" id="Camile" value="Camile"></label><br/>
             <!--  <input type="submit" value="Save" /> -->
             <button id="input">Save</button>
            </fieldset>
          </form>
        </div>
        <div class="col-md-6">
          <h2>Results</h2>
          <div class="submissions">Submissions: <span id="submissions"></span></div><br/>
          <div id="results"></div>
        </div>
    
      </div>

    </div> <!-- /container -->        
   <script src="js/main.js"></script>
     
    </body>
</html>
