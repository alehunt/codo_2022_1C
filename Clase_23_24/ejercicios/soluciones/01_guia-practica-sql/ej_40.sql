/*40. Agrupar a todos los lenguajes según su nombre. Mostrar los nombres de los lenguajes junto al 
porcentaje de habla mínimo registrado para cada uno. (Se esperan 2 columnas y 457 registros).*/
SELECT Language, Min(Percentage)
FROM CountryLanguage
GROUP BY Language;

