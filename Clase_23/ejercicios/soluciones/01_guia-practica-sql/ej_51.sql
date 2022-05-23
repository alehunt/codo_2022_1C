/*51. Insertar un nuevo cliente con los siguientes datos:
'12169851', 'Luis Enrique', 'Pérez', 'HOMBRE', '1954-06-01', 'perez_luisenrique@ma1l.com', '1157319468', 
'Pujol 416', 'Caballito', 'Uruguay'*/
INSERT INTO `inupde`.`clientes`
(`dni`, `nombre`, `apellido`, `genero`, `fecha_nacimiento`, `mail`, `movil`, `domicilio`, `barrio`, `nacionalidad`)
VALUES
( '12169851', 'Luis Enrique', 'Pérez', 'HOMBRE', '1954-06-01', 'perez_luisenrique@ma1l.com', '1157319468', 'Pujol 416', 'Caballito', 'Uruguay');