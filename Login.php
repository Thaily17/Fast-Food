<?php
$conexion = mysqli_connect("localhost", "root", "", "fast food");

$correo = $_POST['correo'];
$contraseña = $_POST['contraseña'];

session_start(); // Iniciar sesión

// Guardar el correo en la sesión (ya lo estás haciendo)
$_SESSION['correo'] = $correo;

// Consulta para obtener el user_id del usuario
$consulta = "SELECT * FROM sesiones WHERE correo='$correo' AND contraseña='$contraseña'";
$resultado = mysqli_query($conexion, $consulta);

$filas = mysqli_num_rows($resultado);

if ($filas) {
    // Si el usuario existe, obtenemos el user_id
    $usuario = mysqli_fetch_assoc($resultado);
    $_SESSION['user_id'] = $usuario['ID'];  // Guardamos el ID del usuario en la sesión

    // Redirigir a la página principal o menú
    header("location:Inicio/Index.html");
} else {
    // Si no hay coincidencias, mostramos un mensaje de error
    include("Login.html");
    ?>
    <div class="bad">Aún no te has registrado!!!</div>
    <?php
}

mysqli_free_result($resultado);
mysqli_close($conexion);
?>
