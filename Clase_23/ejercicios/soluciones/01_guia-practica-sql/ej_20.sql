/*Listar todos los datos de las ciudades de entre 125 mil y 130 mil habitantes.
(Se esperan 5 columnas y 138 registros).*/
SELECT *
FROM city
WHERE city.Population BETWEEN 125000 AND 130000;