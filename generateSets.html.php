<?php 
// Step 1: Retrieve JSON data
$jsonData = file_get_contents('path/to/your/jsonfile.json');

// Step 2: Decode JSON data
$data = json_decode($jsonData, true);

// Step 3: Loop through the data to create HTML elements
foreach ($data as $item) {
    echo "<div>";
    echo "<h5>" . htmlspecialchars($item['title']) . "</h5>";
    echo "<a href='" . htmlspecialchars($item['imagePath']) . "' rel='lightbox' title='" . htmlspecialchars($item['title']) . "'>";
    echo "<img data-toggle='tooltip' data-placement='left' class='wellImg' title='Click to enlarge image' src='" . htmlspecialchars($item['imagePath']) . "'/>";
    echo "</a>";
    echo "<p>" . htmlspecialchars($item['desc']) . "</p>";
    echo "</div>";
}


?>