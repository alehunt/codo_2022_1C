SELECT alu.legajo AS 'Nro legajo', alu.nombre AS 'Nombre y Apellido',
esc.nombre AS 'Escuela'
FROM alumnos alu
INNER JOIN escuelas esc ON alu.id_escuela = esc.id;

