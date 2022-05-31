SELECT e.nombre AS escuela, MAX(nota) AS 'Mayor nota'
FROM escuelas e
INNER JOIN alumnos a ON e.id = a.id_escuela
WHERE nota >= 7
GROUP BY e.nombre;