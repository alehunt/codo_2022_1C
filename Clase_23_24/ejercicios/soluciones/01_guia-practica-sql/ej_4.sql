/*4. Listar el nombre, el GNP como 'Producto Bruto Nacional', el GNPOld como 
'Producto Bruto Nacional Anterior' y la diferencia entre estos como 'Diferencia', 
para todos los países. (Se esperan 4 columnas y 239 registros).*/
SELECT name as Nombre, GNP as 'Producto Bruto Nacional', GNPOld as 'Producto Bruto Nacional Anterior', GNP-GNPOld as Diferencia
FROM country;