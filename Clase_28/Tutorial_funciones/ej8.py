def sumarizar(lista):
    suma=0
    for x in range(len(lista)):
        suma=suma+lista[x]
    return suma


def mayor(lista):
    may=lista[0]
    for x in range(1,len(lista)):
        if lista[x]>may:
            may=lista[x]
    return may


def menor(lista):
    men=lista[0]
    for x in range(1,len(lista)):
        if lista[x]<men:
            men=lista[x]
    return men
    

# bloque principal del programa

lista_valores=[10, 56, 23, 120, 94]
print("La lista completa es: {}".format(lista_valores))
print("La suma de todos su elementos es: {}".format(sumarizar(lista_valores)))
print("El mayor valor de la lista es: {}".format(mayor(lista_valores)))
print("El menor valor de la lista es: {}".format(menor(lista_valores)))
