/*48. Mostrar los distritos, junto al nombre del país al que pertenecen, cuya población 
total (también listada) no supere los diez mil habitantes. (Se esperan 3 columnas y 35 registros).*/
SELECT District, co.Name AS Pais, SUM(ci.Population) AS Poblacion
FROM city ci
INNER JOIN country co ON ci.CountryCode = co.Code
GROUP BY co.Name , District
HAVING SUM(ci.Population) < 10000;