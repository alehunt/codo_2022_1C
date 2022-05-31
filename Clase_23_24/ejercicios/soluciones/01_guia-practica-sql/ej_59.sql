/*59. Eliminar a los clientes cuyo servidor de mail sea 'z0h0'. (Se esperan 2127 registros afectados).*/
DELETE FROM `inupde`.`clientes`
WHERE mail LIKE '%@z0h0%';