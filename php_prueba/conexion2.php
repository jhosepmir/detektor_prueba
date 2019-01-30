<?php

// DATOS DE CONEXION A LA BASE DE DATOS

  $conexion =  pg_connect("host=localhost dbname=test user=root password=root") or die("Error al conectase a la Bd".pg_last_error()); 

$sql_frame="SELECT motivo, des_motivo, estado, tipo   FROM motivos_es_gt ";
 $result=pg_query($conexion,$sql_frame);
 while ($row = pg_fetch_assoc($result)) {
	 
	 echo $row["motivo"];
	 echo $row["des_motivo"];
	 echo $row["estado"];
	 echo $row["tipo"];
 }

 //pg_connect("host=localhost dbname=dbname user=username password=password") or die("Error al conectase a la Bd".pg_last_error()); 

?>