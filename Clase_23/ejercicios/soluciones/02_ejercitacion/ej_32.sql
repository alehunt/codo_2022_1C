SELECT *
FROM escuelas
WHERE escuelas.id IN (SELECT id_escuela FROM alumnos WHERE nota = 10);