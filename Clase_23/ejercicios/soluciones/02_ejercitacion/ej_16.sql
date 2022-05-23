-- Mostrar TODAS las escuelas con el nombre de cada alumno
SELECT esc.*, alu.nombre
FROM escuelas esc
RIGHT JOIN alumnos alu ON esc.id = alu.id_escuela;