/*32. Listar los nombres y la superficie de los países africanos cuya capital 
coincida con el nombre del distrito a la que pertenece. (Se esperan 2 columnas y 32 registros).*/
SELECT co.Name AS Pais, co.SurfaceArea AS Superficie, ci.Name, ci.District
FROM country co
INNER JOIN city ci ON co.Capital = ci.ID
WHERE co.Continent LIKE 'Africa' AND ci.Name = ci.District;