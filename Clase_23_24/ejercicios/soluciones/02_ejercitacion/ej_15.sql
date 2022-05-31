-- Mostrar TODOS los alumnos con los datos de la escuela (opcional)
SELECT alu.legajo, alu.nombre, esc.nombre
FROM alumnos alu
LEFT JOIN escuelas esc ON alu.id_escuela = esc.id;

