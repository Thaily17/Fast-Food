<?php

include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recogemos los datos del formulario
    $usuario = $_POST["usuario"];
    $correo = $_POST["correo"]; // Cambié "Correo" a "correo" para mantener la consistencia
    $contrasena = $_POST["contraseña"]; // Cambié "Contraseña" a "contrasena" para mantener la consistencia

    // Primero, verificamos si el correo ya está registrado
    $sql = "SELECT * FROM sesiones WHERE correo = ?";
    $stmt = $conn->prepare($sql); // Preparamos la consulta
    $stmt->bind_param("s", $correo); // "s" significa que estamos usando una cadena de texto
    $stmt->execute(); // Ejecutamos la consulta
    $result = $stmt->get_result(); // Obtenemos el resultado

    // Verificamos si ya existe un usuario con ese correo
    if ($result->num_rows > 0) {
        echo "<script> alert('El correo electrónico ya está registrado.'); 
        location.href = 'registro.html'; 
        </script>";
    } else {
        // Si el correo no está registrado, procedemos a insertar el nuevo usuario
        $sql = "INSERT INTO sesiones (usuario, correo, contraseña) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql); // Preparamos la consulta de inserción
        $stmt->bind_param("sss", $usuario, $correo, $contrasena); // "sss" significa que estamos usando tres cadenas de texto

        // Ejecutamos la consulta de inserción
        if ($stmt->execute() === TRUE) {
            echo "<script> alert('Usuario creado exitosamente'); 
            location.href = 'Login.html'; 
            </script>";
        } else {
            echo "<script> alert('Error al crear el usuario: " . $conn->error . "'); 
            location.href = 'Registro.php'; 
            </script>";
        }
    }

    // Cerramos la declaración y la conexión
    $stmt->close();
    $conn->close();
}
?>
