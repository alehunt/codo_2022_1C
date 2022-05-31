/*35. Listar nombre, población y país de las diez ciudades europeas de habla inglesa más pobladas.
 (Se esperan 3 columnas y 10 registros).*/
SELECT city.name AS City, city.population, country.name As Country
FROM country
INNER JOIN countrylanguage ON code=countrylanguage.CountryCode
INNER JOIN city ON code=city.CountryCode
WHERE Language="English"  AND continent="Europe"
ORDER BY city.population DESC
LIMIT 10;