/*55. Agregar un cero a la izquierda de todos los DNI con exactamente siete cifras.
 (Se esperan 1173 registros afectados).*/
UPDATE `inupde`.`clientes` 
SET clientes.dni = CONCAT('0', clientes.dni)
WHERE length(clientes.dni)=7;