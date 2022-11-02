<?php

  $db = new PDO('sqlite:database.db');

  $stmt = $db->prepare('INSERT INTO posts VALUES(NULL, ?, ?)');
  $stmt->execute(array($_POST['username'], $_POST['text']));

  header('Location: /');
?>