

<?php 
   $IMAGES = glob("./Images/*.jpg");
   $NUMIMAGES = count($IMAGES); 
   function readTheFile($path) {
      $lines = [];
      $handle = fopen($path, "r");
  
      while(!feof($handle)) {
          $lines[] = trim(fgets($handle));
      }
  
      fclose($handle);
      return $lines;
  }
 function SlideShow(){ 
   global $IMAGES;
   global $NUMIMAGES;
   $lines = readTheFile('desc.txt');
   
   for ($i = 0; $i < $NUMIMAGES; $i++){
         $image = $IMAGES[$i]; 
         echo '<div class = "mySlides fade">';
         echo '<div class = "numberText"> '.$i.' /  '.$NUMIMAGES.'</div>';
         echo '<img src ='.$image.'>';
         echo "<div> $lines[$i] </div>";
         echo "</div>";
         echo '<span class = "dot" onclick="currentSlide(<?php '.$i.'?>)"></span>';
        
    }   
 }
?>