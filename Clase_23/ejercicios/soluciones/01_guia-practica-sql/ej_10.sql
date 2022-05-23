/*10. Listar nombre y continente de los cien países con mayor expectativa de vida. 
Si hubiera países que tengan la misma expectativa de vida, mostrar primero a los de menor 
superficie. (Se esperan 2 columnas y 100 registros).*/SELECT name, continent
FROM country
ORDER BY LifeExpectancy DESC, SurfaceArea ASC
LIMIT 100;