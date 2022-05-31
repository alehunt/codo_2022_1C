/*49. Mostrar las regiones junto a su densidad poblacional promedio, donde ésta supere a la mitad 
de la densidad poblacional máxima. (Se esperan 2 columnas y 3 registros).*/
SELECT Region, AVG(Population / SurfaceArea) AS Densidad
FROM country
GROUP BY Region
HAVING AVG(Population / SurfaceArea)>MAX(Population / SurfaceArea)/2
ORDER BY Region;