/*16. Listar todos los datos de los países cuya independencia se haya dado a partir 
de la segunda mitad del siglo XX. (Se esperan 15 columnas y 110 registros).*/
SELECT *
FROM country
WHERE IndepYear >= 1950;