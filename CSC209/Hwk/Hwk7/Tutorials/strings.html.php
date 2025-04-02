<!DOCTYPE HTML>
<html>
    <body>
    <a href = "tutorial.html">Go back</a>
    <?php
    echo strlen("Hello world!");
    ?> 
    <?php
    echo str_word_count("Hello world!");
    ?>
    <?php 
    echo strpos("Hello world!", "world");
    ?>
    <?php 
    $x = "Hello World!";
    $y = explode(" ", $x);
    
    //Use the print_r() function to display the result:
    print_r($y);
    
    ?>

    <?php
    $x = "Hello";
    $y = "World";
    $z = "$x $y";
    echo $z;
    ?>
    </body>
</html>