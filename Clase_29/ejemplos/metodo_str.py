class Persona:
    def __init__(self,nom,ape):
        self.nombre=nom
        self.apellido=ape

    def __str__(self):
        cadena=self.nombre + " " + self.apellido
        return cadena

#Programa principal
persona1=Persona("José", "Rodríguez")
persona2=Persona("Ana", "Martínez")
print("{} - {}".format(persona1, persona2))