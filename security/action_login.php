<?php
  session_start();

  $db = new PDO('sqlite:database.db');

  $username = $_POST['username'];
  $password = sha1($_POST['password']);

  $stmt = $db->prepare("SELECT * FROM users WHERE username = '$username' AND password = '$password'");
  $stmt->execute();

  $user = $stmt->fetch();

  if ($user) $_SESSION['username'] = $user['username'];

  header('Location: /');
?>