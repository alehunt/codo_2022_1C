-- USO DE WHERE + OR
SELECT nombre, localidad, provincia
FROM escuelas.escuelas
WHERE provincia = "Buenos Aires" OR provincia ="Jujuy";
