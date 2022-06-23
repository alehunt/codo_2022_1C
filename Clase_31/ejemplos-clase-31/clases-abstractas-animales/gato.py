from animal import Animal

class Gato(Animal): #Creo la clase Gato que hereda de Animal

    def mover(self): #Le doy al método abstracto un comportamiento particular
        print("El gato no se mueve.")

    def emitir_sonido(self): #Sobreescribo el método abstracto
                             #Agregándole comportamiento al método anterior
        super().emitir_sonido() #Aprovecho la superclase animal y llamo a su comportamiento
        print("Miau!") #Le agrego algo propio

