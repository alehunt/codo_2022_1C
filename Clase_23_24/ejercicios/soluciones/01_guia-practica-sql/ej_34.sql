/*34. Listar las ciudades junto a sus idiomas oficiales, donde no se hable español,
 inglés, portugués, italiano, francés o alemán de manera oficial. (Se esperan 2 columnas y 2694 registros).*/
SELECT ci.Name AS Ciudad, cl.Language AS "Idioma Oficial"
FROM city ci
INNER JOIN countrylanguage cl ON ci.CountryCode = cl.CountryCode
WHERE cl.IsOfficial LIKE 'T' AND cl.Language NOT IN ('Spanish' , 'English', 'Portuguese', 'Italian', 'French', 'German');