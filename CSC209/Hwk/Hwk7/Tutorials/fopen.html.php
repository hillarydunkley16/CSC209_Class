
<!DOCTYPE html>
<html>
<body>
<a href = "tutorial.html">Go back</a>
<?php
// $file = fopen("https://www.w3schools.com/php/php_arrays_functions.asp","r");
// //Output lines until EOF is reached
// while(! feof($file)) {
//   $line = fgets($file);
//   echo $line. "<br>";
// }

// fclose($file);

?>
<?php
echo file_exists("text.txt");
if (file_exists("text.txt")) {
    $file = fopen("text.txt", "r"); 
    echo fread($file, filesize("text.txt"));
    // while(! feof($file)) {
    //     $line = fgets($file);
    //     echo $line. "<br>";
    // }
fclose($file);
}
?>

</body>
</html>