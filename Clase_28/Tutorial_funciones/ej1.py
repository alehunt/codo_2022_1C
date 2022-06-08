def presentacion():
    print("Programa que permite cargar dos valores por teclado.")
    print("Efectua la suma de los valores")
    print("Muestra el resultado de la suma")
    print("*******************************")

def carga_suma():
    valor1=int(input("Ingrese el primer valor:"))
    valor2=int(input("Ingrese el segundo valor:"))
    suma=valor1+valor2
    print("La suma de los dos valores es: {}".format(suma))

def finalizacion():
    print("*******************************")    
    print("Gracias por utilizar este programa")

# programa principal

presentacion()
carga_suma()
finalizacion()
