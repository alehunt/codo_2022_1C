/*47. Listar los países junto a la cantidad de idiomas diferentes hablados, pero solo aquellos 
donde se hablen entre tres y cinco idiomas diferentes. (Se esperan 2 columnas y 80 registros).*/
SELECT CountryCode, count(CountryCode) AS 'Cantidad de idiomas'
FROM countrylanguage
GROUP BY CountryCode
HAVING count(CountryCode) BETWEEN 3 AND 5;