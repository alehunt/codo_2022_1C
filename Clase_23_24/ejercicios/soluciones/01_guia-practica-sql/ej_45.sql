/*45. Mostrar los lenguajes existentes junto a la cantidad de países que lo hablan de manera oficial.
 (Se esperan 2 columnas y 102 registros).*/
SELECT cl.Language AS Lenguaje, COUNT(*) AS 'Cant. paises'
FROM country co
INNER JOIN countrylanguage cl ON co.Code = cl.CountryCode
WHERE IsOfficial LIKE 'T'
GROUP BY cl.Language;