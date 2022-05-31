SELECT provincia, SUM(capacidad) AS 'Suma de capacidad'
FROM escuelas
GROUP BY provincia;


 