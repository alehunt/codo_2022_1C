class Animal:
    def hablar(self):
        print("Soy una animal no hablo")

class Perro(Animal):
    def hablar(self):
        print("Guau!")

class Gato(Animal):
        pass

class Auto():
    def hablar(self):
        pass

lista = [Perro(), Gato(), Auto()]

for animal in lista:
    animal.hablar()
# Guau!
# Miau!