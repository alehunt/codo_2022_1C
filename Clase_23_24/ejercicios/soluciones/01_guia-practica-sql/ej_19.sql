/*19. Listar todos los datos de las ciudades argentinas fuera de la provincia de Buenos Aires.
 (Se esperan 5 columnas y 26 registros).*/
SELECT *
FROM city
WHERE CountryCode = 'ARG' AND District <> 'Buenos Aires';