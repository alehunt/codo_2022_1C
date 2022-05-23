/*60. Eliminar a todos los clientes que residan en el barrio de 'Flores'. (Se esperan 803 registros afectados).*/
DELETE FROM `inupde`.`clientes`
WHERE barrio LIKE 'Flores';