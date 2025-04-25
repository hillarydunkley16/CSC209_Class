
<!DOCTYPE html>
<html>
    <body>

    <?php 
    $filePath = "../Output/users.json";

    if (file_exists($filePath)) {
        $json = file_get_contents($filePath);
        $data = json_decode($json, true);

        if (!is_array($data)) {
            $data = []; // fallback in case of invalid JSON
        }
        echo "<h2>Success</h2>"; 
        $data[] = $_POST;

        file_put_contents($filePath, json_encode($data, JSON_PRETTY_PRINT));
        header("location:../Pages/index.html.php");
    } else {
        echo "file doesn't exist yet";
        $data = [$_POST];
        file_put_contents($filePath, json_encode($data, JSON_PRETTY_PRINT));
        header("location:../Pages/index.html.php");
    }
    //figure out how to discern between new users and returning users, parse through json as object to see if uname comes up more than once 
    //redirect php to home page with php header 
    

    ?>
    </body>
</html>

