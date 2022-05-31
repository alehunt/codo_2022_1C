/*24. Listar todos los datos de los países cuyo nombre sea compuesto (más de una palabra).
 (Se esperan 15 columnas y 66 registros).*/
SELECT *
FROM country
WHERE Name LIKE '% %';