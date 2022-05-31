/*37. Mostrar según la tabla de países, la cantidad total de población, la población máxima,
 la población mínima y el promedio de población, por cada continente. (Se esperan 5 columnas y 7 registros).*/
SELECT Continent,
sum(population) AS Total, max(population) AS Máximo, min(population) AS Mínimo, AVG(population) AS Promedio
FROM country
GROUP BY Continent;
