/*30. Listar los códigos, los nombres locales y la región a la que pertenecen aquellos 
países donde se hable español. (Se esperan 3 columnas y 28 registros).*/
SELECT code, localname, region
FROM country INNER JOIN countrylanguage ON country.code=countrylanguage.countrycode
WHERE language="Spanish";