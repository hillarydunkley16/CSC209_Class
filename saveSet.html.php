
    <?php
    $filePath = "../Output/flashCardSet.json";
    print_r($_POST); 
    if (file_exists($filePath)) {
       
        $json = file_get_contents($filePath);
        $data = json_decode($json, true);
        $newSet = [
            "setTitle" => $_POST["setTitle"] ?? "",
            "numberofCards" => $_POST["numCards"] ?? 0,
            "flashCards" => $_POST["flashCards"] ?? []
        ];
        $data[] = $newSet;

        file_put_contents($filePath, json_encode($data, JSON_PRETTY_PRINT));
        $text = '<!DOCTYPE HTML><html><body><h1>'.$newSet["setTitle"].'</h1></body></html>';
        $htmlFilePath = "../Pages/flashCardSets/flashCard1.html.php";
        file_put_contents($htmlFilePath, $text);
        header("Location: $htmlFilePath", true, 301);
        exit; 
    }
    else{
        echo "file doesn't exist yet";

        $newSet = [
            "setTitle" => $_POST["setTitle"] ?? "",
            "numberofCards" => $_POST["numCards"] ?? 0,
            "flashCards" => $_POST["flashCards"] ?? []
        ];
        $data[] = $newSet;
        file_put_contents($filePath, json_encode($data, JSON_PRETTY_PRINT));
        $text = '<!DOCTYPE HTML><html><body><h1>'.$newSet["setTitle"].'</h1></body></html>';
        $htmlFilePath = "../Pages/flashCardSets/flashCard1.html.php";
        file_put_contents($htmlFilePath, $text);
        header("Location: $htmlFilePath", true, 301);
        exit; 
    }
    // Initialize file if it doesn't exist
    // create HTML page on save to view flashcards 
    // put dynamic DOM javascript 
    ?>
