/*39. Agrupar a todas las ciudades según el país al que pertenecen. 
Mostrar los códigos de países junto a la sumatoria total de habitantes de cada uno. 
(Se esperan 2 columnas y 232 registros).*/
SELECT Code AS Pais, sum(Population) AS 'Total de habitantes'
FROM country
GROUP BY Name
HAVING sum(Population)>0;S