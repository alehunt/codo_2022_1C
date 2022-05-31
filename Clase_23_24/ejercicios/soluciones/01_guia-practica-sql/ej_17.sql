/*17. Listar todos los datos de los países situados en Europa, Asia o Sudamérica.
 (Se esperan 15 columnas y 111 registros).*/
SELECT * 
FROM country
WHERE Continent IN ('Europe','Asia','South America');