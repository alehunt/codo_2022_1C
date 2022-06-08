def cargar():
    lista=[]
    continua="s"
    while continua=="s":
        valor=int(input("Ingrese un valor:"))
        lista.append(valor)
        continua=input("Agrega otro elemento a la lista? [s/n]:")
    return lista

def fijar_cero(li):
    for x in range(len(li)):
        if li[x]<10:
            li[x]=0

def imprimir(lista):
    for elemento in lista:
        print("{}".format(elemento))
    print("")

# bloque principal
lista=cargar()
print("Lista antes de modificar")
imprimir(lista)
fijar_cero(lista)
print("Lista despues de modificar")
imprimir(lista)