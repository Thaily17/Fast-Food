<?php
session_start();

// Conectar a tu base real
$conexion = mysqli_connect("localhost", "root", "", "fast food");

if (isset($_SESSION['correo'])) {
    $correo = $_SESSION['correo'];

    // BORRAR al usuario para que ya no pueda volver a entrar con ese correo
    $borrar = "DELETE FROM sesiones WHERE correo='$correo'";
    mysqli_query($conexion, $borrar);
}

mysqli_close($conexion);

// Borrar toda la sesión
session_unset();
session_destroy();
?>
<script>
    localStorage.removeItem('usuarioActual');
    sessionStorage.clear();
    alert('Sesión cerrada. Este usuario ya no podrá volver a entrar, debes registrarte de nuevo.');
    window.location.href = 'Login.html';
</script>