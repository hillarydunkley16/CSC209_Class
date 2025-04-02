<!DOCTYPE html>
<html>
    <body>
        <?php 
        $x = 5; 
        echo(var_dump($x));
        ?>
        <?php echo "<br>"; ?>
        <?php
        $txt = "W3Schools.com";
        echo "I love " . $txt . "!";
        ?>
       <?php echo "<br>"; ?>
        <?php 
        $x = 5;
        $z = 10;
        function myTest(){
            $y = 5; 
            echo $y;
        }
        myTest(); 
        function getGlobals(){
            global $x, $z;
            $z = $x + $z; 
            echo $z;
            echo $GLOBALS['x']; 
        }
        getGlobals();
        ?>
    </body>
</html>