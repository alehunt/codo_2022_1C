def calcular_sueldo(nombre,costo_hora,cantidad_horas):
    sueldo=costo_hora*cantidad_horas
    print("{} trabajo {} horas y cobra un sueldo de ${}".format(nombre,cantidad_horas,sueldo))

# bloque principal

calcular_sueldo("Juan",10,120)
calcular_sueldo(costo_hora=12,cantidad_horas=40,nombre="Ana")
calcular_sueldo(cantidad_horas=90,nombre="Luis",costo_hora=7)
