/*Listar todos los datos de las ciudades cuyo nombre o distrito 
contengan un '-'. (Se esperan 5 columnas y 372 registros).*/
SELECT *
FROM city
WHERE city.Name LIKE '%-%' OR city.District LIKE '%-%';