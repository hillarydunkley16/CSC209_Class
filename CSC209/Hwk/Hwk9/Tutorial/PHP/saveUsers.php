
<?php 
$filePath = "../Output/users.json";

if (file_exists($filePath)) {
    $json = file_get_contents($filePath);
    $data = json_decode($json, true);

    if (!is_array($data)) {
        $data = []; // fallback in case of invalid JSON
    }

    $data[] = $_POST;

    file_put_contents($filePath, json_encode($data, JSON_PRETTY_PRINT));
} else {
    echo "file doesn't exist yet";
    $data = [$_POST];
    file_put_contents($filePath, json_encode($data, JSON_PRETTY_PRINT));
}




 ?>

