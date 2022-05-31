/*21. Listar todos los datos de los países donde no se cuente con datos acerca de su independencia.
 (Se esperan 15 columnas y 47 registros).*/
SELECT *
FROM country
WHERE IndepYear IS NULL;

