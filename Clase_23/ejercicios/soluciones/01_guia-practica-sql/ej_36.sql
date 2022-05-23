/*36. Mostrar según la tabla de países, la cantidad total de población,
 la población máxima, la población mínima, el promedio de población y con cuántos registros
 de población se cuenta. (Se esperan 5 columnas y 1 registro).*/
SELECT sum(population) AS Total,
max(population) AS Máximo, min(population) AS Mínimo,
AVG(population) AS Promedio, COUNT(population) AS 'Cantidad de registros'
FROM city;
