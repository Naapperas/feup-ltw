<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        echo "<p>" . $_GET["num1"] . " + " . $_GET["num2"] . " = " . $_GET["num1"] + $_GET["num2"] . "</p>";
    ?>
    <a href="form2.php">Do another sum</a>
</body>
</html>