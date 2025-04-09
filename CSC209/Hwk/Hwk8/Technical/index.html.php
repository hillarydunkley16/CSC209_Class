<!DOCTYPE html>
<html>



<head>
   
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Slideshow PHP</title>
    <script>slideIndex = 1</script>
    <!-- <link rel="stylesheet" type="text/css" href="./CSS/"> -->
    <style>
    <?php include 'CSS/index.css'; ?>
    </style>
        
</head>
<body>
    <a href = "../index.html">Go back</a>
    <?php require "./PHP/index.php";?>
    <?php SlideShow(); ?>
    <a class="prev" onclick="plusSlides(-1)"><</a>
    <a class="next" onclick="plusSlides(1)">></a>
    <script src = "Javascript/index.js">
        console.log(slideIndex)
        showSlides(slideIndex)
    </script>
</body>

</html>