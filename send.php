<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$email = $data['email'];
$company = $data['company'];
$message = $data['message'];

$to = "contacto@lhbconsultora.com";
$subject = "Nuevo contacto desde la web";

$body = "Nombre: $name\n";
$body .= "Email: $email\n";
$body .= "Empresa: $company\n";
$body .= "Mensaje:\n$message\n";

$headers = "From: contacto@tudominio.com\r\n";
$headers .= "Reply-To: $email\r\n";

if(mail($to, $subject, $body, $headers)){
    echo json_encode(["success"=>true]);
}else{
    echo json_encode(["success"=>false]);
}

?>
