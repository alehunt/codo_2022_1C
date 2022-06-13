class Operacion:

    def __init__(self):
        self.valor1=int(input("Ingrese primer valor:"))
        self.valor2=int(input("Ingrese segundo valor:"))
        self.sumar()
        self.restar()
        self.multiplicar()
        self.dividir()

    def __del__(self):
        print('Método delete llamado')

    def sumar(self):
        suma=self.valor1+self.valor2
        print("La suma es: {}".format(suma))

    def restar(self):
        resta=self.valor1-self.valor2
        print("La resta es: {}".format(resta))

    def multiplicar(self):
        producto=self.valor1*self.valor2
        print("El producto es: {}".format(producto))

    def dividir(self):
        division=self.valor1/self.valor2
        print("La division es: {}".format(division))

# Bloque principal
operacion1=Operacion()