/*56. Agregar una tilde a todos los clientes llamados 'Nicolas' como único nombre para 
que el mismo pase a ser 'Nicolás'. (Se esperan 3 registros afectados).*/
UPDATE `inupde`.`clientes`
SET `nombre`='Nicolás'
WHERE `nombre`='Nicolas';
