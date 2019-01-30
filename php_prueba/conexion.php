<?php

// DATOS DE CONEXION A LA BASE DE DATOS
function conexion() {
  $conexion =  pg_connect("host=localhost dbname=test user=root password=root") or die("Error al conectase a la Bd".pg_last_error()); 

  
  return $conexion;
}


 //pg_connect("host=localhost dbname=dbname user=username password=password") or die("Error al conectase a la Bd".pg_last_error()); 

?>