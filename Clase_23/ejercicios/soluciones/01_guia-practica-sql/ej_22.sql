/*22. Listar todos los datos de los países donde no se tengan datos acerca del PBN anterior 
ni de la expectativa de vida. (Se esperan 15 columnas y 17 registros).*/
SELECT *
FROM country
WHERE LifeExpectancy IS NULL AND GNPOld IS NULL;