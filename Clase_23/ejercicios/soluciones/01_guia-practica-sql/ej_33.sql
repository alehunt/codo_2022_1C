/*33. Listar los nombres, las capitales y el año de independencia (sin nulos) 
de los 20 países más antiguos. (Se esperan 3 columnas y 20 registros).*/
SELECT co.Name AS Pais, ci.Name AS Capital, co.IndepYear
FROM country co
INNER JOIN city ci ON co.Capital = ci.ID
WHERE co.IndepYear IS NOT NULL
ORDER BY co.IndepYear
LIMIT 20;