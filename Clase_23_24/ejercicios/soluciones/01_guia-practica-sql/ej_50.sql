/*50. Mostrar los lenguajes oficiales junto a su porcentaje promedio de habla, cuyo promedio no 
supere un dígito entero. (Se esperan 2 columnas y 7 registros).*/
SELECT cl.Language, AVG(cl.Percentage)
FROM countrylanguage AS cl
WHERE cl.IsOfficial = 'T'
GROUP BY cl.Language
HAVING AVG(cl.Percentage) < 10;