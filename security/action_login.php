<?php
  session_start();

  $db = new PDO('sqlite:database.db');

  $username = $_POST['username'];
  $password = sha1($_POST['password']);

  $stmt = $db->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
  $stmt->execute([$username, $password]);

  $user = $stmt->fetch();

  if ($user) $_SESSION['username'] = $user['username'];

  header('Location: /');
?>