<?php
session_start(); // Iniciar sesión

// Verificar si el usuario está logueado
if (!isset($_SESSION['user_id'])) {
    // Si no está logueado, redirigir al login
    header("Location: Login.html");
    exit();
}

$user_id = $_SESSION['user_id'];  // Obtener el ID del usuario desde la sesión

$servername = "localhost";
$username = "root";
$password = "";
$db_name = "fast food";  // Nombre de tu base de datos

// Conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $db_name);

// Verificar la conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Inicializar variables para los campos del formulario
$estado = $localidad = $colonia = $cp = $Ni = $telefono = $indicaciones = '';

// Consultar si ya existe una dirección guardada para el usuario
$sql = "SELECT * FROM direccion WHERE user_id = '$user_id' LIMIT 1";
$resultado = $conn->query($sql);

if ($resultado->num_rows > 0) {
    // Si ya tiene una dirección guardada, obtener los datos
    $direccion = $resultado->fetch_assoc();
    $estado = $direccion['estado'];
    $localidad = $direccion['Localidad'];
    $colonia = $direccion['colonia'];
    $cp = $direccion['cp'];
    $Ni = $direccion['Ni'];
    $telefono = $direccion['telefono'];
    $indicaciones = $direccion['indicaciones'];
}

$conn->close();

// Procesar el formulario si se envía
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $estado = $_POST["estado"];
    $localidad = $_POST["Localidad"];
    $colonia = $_POST["colonia"];
    $cp = $_POST["cp"];
    $Ni = $_POST["Ni"];
    $telefono = $_POST["telefono"];
    $indicaciones = $_POST["indicaciones"];

    // Si el usuario ya tiene una dirección, actualizamos la existente
    if ($direccion) {
        $sql = "UPDATE direccion SET estado='$estado', Localidad='$localidad', colonia='$colonia', cp='$cp', Ni='$Ni', telefono='$telefono', indicaciones='$indicaciones' WHERE user_id='$user_id'";
    } else {
        // Si no tiene dirección, la insertamos como nueva
        $sql = "INSERT INTO direccion (user_id, estado, Localidad, colonia, cp, Ni, telefono, indicaciones)
                VALUES ('$user_id', '$estado', '$localidad', '$colonia', '$cp', '$Ni', '$telefono', '$indicaciones')";
    }

    $conn = new mysqli($servername, $username, $password, $db_name);
    if ($conn->query($sql) === TRUE) {
        echo "<script> alert('Dirección guardada exitosamente');
        location.href = '../inicio/index.html';  // Redirigir al menú o a la página deseada
        </script>";
    } else {
        echo "<script> alert('Error al guardar la dirección');
        location.href = 'direccion.php';  // Redirigir al formulario
        </script>" . $conn->error;
    }

    $conn->close();
}
?>
