/*27. Listar el código de país, junto a los nombres de las ciudades y su cantidad de habitantes,
 de aquellos cuya expectativa de vida sea mayor a 80. (Se esperan 3 columnas y 253 registros).*/
SELECT country.Code AS CodPais, city.Name AS Ciudad, city.Population AS CantHabitantes
FROM country
-- INNER JOIN city ON country.Code = city.CountryCode
INNER JOIN city ON city.CountryCode = country.Code
WHERE LifeExpectancy > 80;