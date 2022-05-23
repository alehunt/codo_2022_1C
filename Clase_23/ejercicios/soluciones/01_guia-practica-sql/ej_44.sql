/*44. Mostrar los nombres de los países que tengan ciudades en el Caribe, junto al número 
de las mismas por país. (Se esperan 2 columnas y 24 registros).*/
SELECT co.Name, count(ci.Name) AS 'Cant. Ciudades', co.Region
FROM country co
INNER JOIN city ci ON co.Code = ci.CountryCode
GROUP BY co.Name
HAVING co.Region = 'Caribbean';