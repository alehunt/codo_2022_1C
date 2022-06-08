def mostrar_perimetro(lado):
    per=lado*4
    print("El perimetro es: {} m".format(per))


def mostrar_superficie(lado):
    sup=lado*lado
    print("La superficie es: {} m2".format(sup))


def cargar_dato():
    lado=int(input("Ingrese el valor del lado de un cuadrado:"))
    respuesta=input("Quiere calcular el perimetro o la superficie[ingresar texto: perimetro/superficie]?")
    if respuesta=="perimetro":
        mostrar_perimetro(lado)
    if respuesta=="superficie":
        mostrar_superficie(lado)


# programa principal

cargar_dato()
