/*12. Listar todos los datos de los países cuya expectativa de vida supere los setenta y cinco años,
 ordenados bajo este concepto de forma ascendente. (Se esperan 15 columnas y 62 registros).*/
SELECT *
FROM country
WHERE country.LifeExpectancy > 65
ORDER BY country.LifeExpectancy;
