/*28. Listar las capitales de los países cuya forma de gobierno sea una República Federal.
 (Se esperan 2 columnas y 15 registros).*/
SELECT co.Name AS Pais, ci.Name AS Capital
FROM country AS co
INNER JOIN city ci ON co.Capital = ci.ID
WHERE GovernmentForm LIKE 'Federal Republic';