from abc import ABC, abstractmethod

#Acá lo que creamos es una interfaz, es decirle qué métodos va a tener la clase
# No sabemos cómo va a ser implementado porque no todos los animales se comportan igual
# No tengo forma de implementar esta clase
# Este es un modelo para construir algo más, pero no va a poder ser implementado
class Animal(ABC): #Creamos la clase abstracta con métodos abstractos
    @abstractmethod #Indicamos que va a ser un método abstracto
    def mover(self):
        pass

    @abstractmethod #Indicamos que va a ser un método abstracto
    def emitir_sonido(self):
        print("Animal emite sonido", end=": ")

    def hacer_caca(self):
        print("CACA")

class Gato(Animal): #Creo la clase Gato que hereda de Animal

    def mover(self): #Le doy al método abstracto un comportamiento particular
        print("El gato no se mueve.")

    def emitir_sonido(self): #Sobreescribo el método abstracto
                             #Agregándole comportamiento al método anterior
        super().emitir_sonido() #Aprovecho la superclase animal y llamo a su comportamiento
        print("Miau!") #Le agrego algo propio


class Perro(Animal): #Creo la clase Perro que hereda de Animal

    def mover(self): #Le doy al método abstracto un comportamiento particular
        print("El perro se está moviendo.")


    def emitir_sonido(self): #Sobreescribo el método abstracto
                             #Agregándole comportamiento al método anterior
        super().emitir_sonido() #Aprovecho la superclase animal y llamo a su comportamiento
        print("Guau, Guau!") #Le agrego algo propio


