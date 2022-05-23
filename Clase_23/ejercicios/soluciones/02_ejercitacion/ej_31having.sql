SELECT e.nombre AS escuela, MAX(nota) AS 'Mayor nota'
FROM escuelas e
INNER JOIN alumnos a ON e.id = a.id_escuela
GROUP BY e.nombre
HAVING max(nota)>=7;