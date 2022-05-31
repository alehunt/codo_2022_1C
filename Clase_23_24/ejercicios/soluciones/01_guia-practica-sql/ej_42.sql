/*42. Mostrar las diez regiones de mayor expectativa de vida promedio. 
(Se esperan 2 columnas y 10 registros).*/
SELECT Region, AVG(LifeExpectancy)
FROM country
GROUP BY Region
ORDER BY AVG(LifeExpectancy) DESC
LIMIT 10;
