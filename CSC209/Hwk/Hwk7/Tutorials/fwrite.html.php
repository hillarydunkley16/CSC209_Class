<!DOCTYPE HTML>
<html>
    <a href = "tutorial.html">Go back</a>
    <?php 
    $file = fopen("wrong.txt","w");
    echo fwrite($file,"Hello World. Testing!");
    fclose($file);
    ?>
</html>