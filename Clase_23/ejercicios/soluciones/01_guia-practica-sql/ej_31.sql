/*31. Listar los nombres y las capitales de los países en cuya capital se concentre 
más de la mitad de su población total. (Se esperan 2 columnas y 14 registros).*/
SELECT co.Name AS Pais, ci.Name AS Capital, ci.Population AS PobCapital, co.Population AS PobPais
FROM country co
INNER JOIN city ci ON co.Capital = ci.ID
WHERE ci.Population > (co.Population / 2);