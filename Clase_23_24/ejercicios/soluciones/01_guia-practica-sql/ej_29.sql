/*29. Listar los lenguajes oficiales, junto al nombre de sus respectivos países,
 donde la cantidad de habitantes de dicho país esté entre un millón y tres millones.
 (Se esperan 2 columnas y 14 registros).*/
SELECT Name AS Pais, Language AS Idioma
FROM country
INNER JOIN countrylanguage ON country.Code = countrylanguage.CountryCode
WHERE Population BETWEEN 1000000 AND 3000000 AND IsOfficial LIKE 'T';