def retornar_superficie(lado):
    sup=lado*lado
    return sup


# bloque principal del programa

lado=int(input("Ingrese el valor del lado del cuadrado:"))
superficie=retornar_superficie(lado)
print("La superficie del cuadrado es: {} m2".format(superficie))
