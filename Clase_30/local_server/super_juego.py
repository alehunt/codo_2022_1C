from pickletools import read_uint1
import random
import re

class Dado:
    def __init__(self):
        self.__valor = 1

    def tirar(self):
        self.__valor = random.randint(1, 6)
    
    def imprimir(self):
        self.tirar()
        print(f"Salió: {self.__valor}")

    def obtener_valor(self):
        return self.__valor

    def __repr__(self):
        return f"Dado({self.__valor})"

    def __str__(self):
        return f"{self.__valor}"

    @property
    def valor(self):
        return self.__valor

    @valor.setter
    def valor(self, pNuevoValor):
        if pNuevoValor > 6 or pNuevoValor < 0:
            print("No se puede hacer")
        else:
            self.__valor = pNuevoValor

class JuegoDado:
    def __init__(self):
        self.dado_1 = Dado()
        self.dado_2 = Dado()
        self.dado_3 = Dado()

    # def __tirardados(self):
    #     self.dado_1.tirar()
    #     self.dado_2.tirar()
    #     self.dado_3.tirar()

    def jugar(self):
        self.__tirardados()
        self.dado_1.tirar()
        self.dado_1.imprimir()
        self.dado_2.tirar()
        self.dado_2.imprimir()
        self.dado_3.tirar()
        self.dado_3.imprimir()
       
        self.dado_1.valor = 12
        
        if self.dado_1.valor == self.dado_2.valor == self.dado_3.valor:
            print("Gano")

        if self.dado_1.obtener_valor() == self.dado_2.obtener_valor() == self.dado_3.obtener_valor():
            print("Ganaste")
        else:
            print("Perdiste")

mi_juego = JuegoDado()
mi_juego.jugar()


    

