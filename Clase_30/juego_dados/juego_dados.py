import random

class Dado:
    def __init__(self):
        self.__valor = random.randint(1, 6)

    def tirar(self):
        self.__valor = random.randint(1, 6)

    def imprimir(self):
        print(f"Valor del dado: {self.__valor}")

    def obtener_valor(self):
        return self.__valor

class JuegoDados:
    def __init__(self):
        self.dado_1 = Dado()
        self.dado_2 = Dado()
        self.dado_3 = Dado()

    def jugar(self):
        self.dado_1.tirar()
        self.dado_1.imprimir()
        self.dado_2.tirar()
        self.dado_2.imprimir()
        self.dado_3.tirar()
        self.dado_3.imprimir()

        if self.dado_1.obtener_valor() == self.dado_2.obtener_valor() == \
           self.dado_3.obtener_valor():
            print("Ganó")
        else:
            print("Perdió")


juego_dados = JuegoDados()
juego_dados.jugar()
