/*9. Listar código, nombre y año de independencia de todos los países, ordenados por 
antigüedad descendente. (Se esperan 3 columnas y 239 registros).*/
SELECT CODE, NAME, IndepYear
FROM country
ORDER BY IndepYear DESC;