SELECT alu.legajo, alu.nombre, esc.nombre
FROM alumnos alu
INNER JOIN escuelas esc ON alu.id_escuela = esc.id;

