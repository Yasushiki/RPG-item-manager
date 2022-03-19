<?php

require_once "config.php";

$username = $senha = $confirm_senha = "";
$username_err = $senha_err = $confirm_senha_err = "";

// processa os dados do formulário quando é postado
if($_SERVER["REQUEST_METHOD"] == "POST") {


  // validar usuário
  if(empty(trim($_POST["username"]))) {
    $username_err = "Insira um usuário.";
  } elseif(!preg_match('/^[a-zA-Z0-9_]+$/', trim($_POST["username"]))) {
    $username_err = "O usuário só pode conter letras, números e _.";
  } else {

    // preparar declaração sql
    $sql = "SELECT id FROM users WHERE username = ?";

    if($stmt = $mysqli->prepare($sql)) {
      $stmt->bind_param("s", $param_username);

      $param_username = trim($_POST["username"]);

      if($stmt->execute()) {
        $stmt->store_result();

        if($stmt->num_rows == 1) {
          $username_err = "Esse usuário já está sendo utilizado.";
        } else {
          $username = trim($_POST["username"]);
        }
      } else {
        echo "Algo errado aconteceu. Tente novamente mais tarde.";
      }
    }
    $stmt->close();
  }

    // validar senha
    if(empty(trim($_POST["senha"]))) {
      $senha_err = "Insira uma senha.";
    } elseif(strlen(trim($_POST["senha"])) < 6) {
      $senha_err = "A senha deve conter pelo menos 6 caracteres.";
    } else {
      $senha = trim($_POST["senha"]);
    }

    // validar confirmação da senha
    if(empty(trim($_POST["confirm_senha"]))) {
      $confirm_senha_err = "Confirme a senha.";
    } else {

      $confirm_senha = trim($_POST["confirm_senha"]);

      if(empty($senha_err) && ($senha != $confirm_senha)) {
        $confirm_senha_err = "As senhas não correspondem.";
      }
    }

    if(empty($username_err) && empty($senha_err) && empty($confirm_senha_err)) {

      $sql = "INSERT INTO users (username, senha) VALUES (?, ?)";

      if($stmt = $mysqli->prepare($sql)) {
        $stmt->bind_param("ss", $param_username, $param_senha);

        $param_username = $username;
        $param_senha = password_hash($password, PASSWORD_DEFAULT);

        if($stmt->execute()) {
          header("location: index.php");
        } else {
          echo "Algo deu errado. Tente novamente mais tarde.";
        }

        $stmt->close();

    }
  }

  $mysqli->close();
}

?>

<!DOCTYPE html>
<html lang="pt" dir="ltr">

  <head>
    <meta charset="utf-8">
    <title>Gerenciador RPG - Cadastro</title>
    <link rel="stylesheet" href="CSS/login.css" type="text/css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  </head>

  <body>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
      <div class="form-group">
        <label>Username</label>
        <input type="text" name="username" class="form-control" value="<?php echo $username;?>">
        <span><?php echo $username_err;?></span>
      </div>
      <div class="form-group">
        <label>Senha</label>
        <input type="text" name="senha" class="form-control" value="<?php echo $senha;?>">
        <span><?php echo $senha_err;?></span>
      </div>
      <div class="form-group">
        <label>Confirmar senha</label>
        <input type="text" name="confirm_senha" class="form-control" value="<?php echo $confirm_senha;?>">
        <span><?php echo $confirm_senha_err;?></span>
      </div>
      <div class="form-group">
        <input type="submit" class="btn btn-primary" value="Enviar">
        <input type="reset" class="btn btn-secondary ml-2" value="Resetar">
      </div>
    </form>

  </body>

</html>
