class Familia:

    def __init__(self,padre,madre,hijos=[]):
        self.padre=padre
        self.madre=madre
        self.hijos=hijos

    # Método especial __str__
    # Python nos permite redefinir el método que se debe ejecutar. Esto se hace definiendo en la clase el método especial __str__
    # Podemos implementar el método __str__ y retornar un string, este luego será el que imprime la función print.
    def __str__(self):
        cadena=self.padre+","+self.madre
        for hijo in self.hijos:
            cadena=cadena+","+hijo
        return cadena

# Programa principal
familia1=Familia("Pablo","Ana",["Pepe","Julio"])
familia2=Familia("Jorge","Carla")
familia3=Familia("Luis","Maria",["Marcos"])

print(familia1)
print(familia2)
print(familia3)