/*57. Poner en mayúsculas los apellidos de los clientes cuya nacionalidad 
no sea 'Argentina'. (Se esperan 4450 registros afectados).*/
UPDATE `inupde`.`clientes`
SET apellido=upper(apellido)
WHERE nacionalidad NOT LIKE 'Argentina';