/*14. Listar todos los datos de los diez países europeos de mayor PBN. (Se esperan 15 columnas y 10 registros).*/
SELECT *
FROM country
WHERE Continent = 'Europe'
ORDER BY GNP DESC
LIMIT 10;