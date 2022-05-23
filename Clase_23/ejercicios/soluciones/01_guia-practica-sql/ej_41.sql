/*41. Mostrar las distintas formas de gobierno posibles de los países europeos junto a 
su correspondiente promedio de población que vive bajo estas circunstancias. 
(Se esperan 2 columnas y 10 registros).*/
SELECT GovernmentForm, AVG(Population), Continent
FROM country
GROUP BY GovernmentForm
HAVING Continent='Europe';
