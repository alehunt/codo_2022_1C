/*38. Agrupar a todos los países según el continente al que pertenecen. 
Mostrar los continentes junto a la cantidad de naciones que pertenecen a cada uno. 
(Se esperan 2 columnas y 7 registros).*/
SELECT Continent AS Continente, count(*) AS 'Cant. Naciones'
FROM country
GROUP BY Continent;