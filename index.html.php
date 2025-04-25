<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="UTF-8">
        <meta name="author" content="Hillary Dunkley">
        <meta name="description" content="Home Page">
        <title>Home Page</title>
        <link id = "themeStylesheet" rel="stylesheet" type="text/css" href="../CSS/index.css">
        
    </head>
    <body>
    <div id = "hero">
            <div class = "header">
                <h1>Quizlet Lite</h1>
            </div>
            <div class = "topnav">
                <ul>
                    <li><a href="../tutorials/tutorial.html">Home</a></li>
                    <li><a href = "signup.html.php">Signup</a></li>
                    <li><a href = "#">Login</a></li>
                    <li><a href = "createSet.html.php">New</a></li>
                    <li><button onclick="toggleTheme()">Switch Theme</button></li>
                </div>
                </ul>
            </div>
       </div>   
        <div id = "viewCards">

            <!-- dynamically show flashcards -->

        </div>
        </div>
        <script src = "../Javascript/fetchSets.js">
            
        </script>
    </body>
</html>