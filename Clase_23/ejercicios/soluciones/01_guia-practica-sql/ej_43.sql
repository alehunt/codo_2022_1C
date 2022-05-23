/*43. Mostrar los nombres de los diez distritos de mayor cantidad de ciudades con cantidad 
de habitantes mayor al medio millón, junto a la cantidad de ciudades. (Se esperan 3 columnas y 10 registros).*/
SELECT District AS 'Distrito', count(District) as 'Cant. Ciudades', Population
FROM city
GROUP BY District
HAVING Population > 500000
ORDER BY count(District) DESC
LIMIT 10;