from animal import Animal

class Perro(Animal): #Creo la clase Perro que hereda de Animal

    def mover(self): #Le doy al método abstracto un comportamiento particular
        print("El perro se está moviendo.")

    def emitir_sonido(self): #Sobreescribo el método abstracto
                             #Agregándole comportamiento al método anterior
        super().emitir_sonido() #Aprovecho la superclase animal y llamo a su comportamiento
        print("Guau, Guau!") #Le agrego algo propio

