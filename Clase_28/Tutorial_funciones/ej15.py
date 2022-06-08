def sumar(v1,v2,*tupla):
    suma=v1+v2
    for x in range(len(tupla)):
        suma=suma+tupla[x]
    return suma

# bloque principal
print("La suma de 1+2: {}".format(sumar(1,2)))
print("La suma de 1+2+3+4: {}".format(sumar(1,2,3,4)))
print("La suma de 1+2+3+4+5+6+7+8+9+10: {}".format(sumar(1,2,3,4,5,6,7,8,9,10)))
