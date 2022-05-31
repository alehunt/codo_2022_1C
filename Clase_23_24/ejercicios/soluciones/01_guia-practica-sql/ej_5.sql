/*5. Listar el nombre, la cantidad de habitantes, la superficie y una columna llamada 
'Densidad' con el resultado de la densidad poblacional de todos los países. (Se esperan 4 columnas y 239 registros).*/
SELECT name as Nombre, population as Población, SurfaceArea as Superficie, population/SurfaceArea as Densidad
FROM country;