<!DOCTYPE html>
<html>
    <head>
    <link id = "themeStylesheet" rel="stylesheet" type="text/css" href="../CSS/index.css">
    
    </head>
    <body>
   

<form  id="cardContainer" action="../PHP/saveSet.html.php" method = "post"> 
    <label for="setTitle"><b>Set Title</b></label>
        <input type="text" placeholder="Enter Set title"  name="setTitle" id="setTitle" required>

        <label for="numCards"><b>Number of Terms</b></label>
        <input id="numCards" type="number" name="numCards" min="2" max="100" required>

        <button type="submit" onClick="onSubmit(event)">Submit</button>
</form>

<script src="../Javascript/createSet.js"></script>


    </body>
</html> 