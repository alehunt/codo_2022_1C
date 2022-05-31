/*8. Listar nombre y cantidad de habitantes de las veinte ciudades menos pobladas.
(Se esperan 2 columnas y 20 registros).*/
SELECT name, population 
FROM city
ORDER BY population
LIMIT 20;