class Persona: #Creamos la clase (class + sustantivo en singular en mayúscula)

    piernas=2 #Variable de clase

    def inicializar(self,nombre): #Constructor
        self.nombre=nombre

    def imprimir(self): #Método para mostrar datos
        print("Nombre: {}".format(self.nombre))

# Programa principal
persona1=Persona() #Creamos un objeto
persona1.inicializar("Pedro") #Llamamos al constructor con un nombre
persona1.imprimir()  #Mostramos los datos
print(persona1.piernas)

persona2=Persona()
persona2.inicializar("Carla")
persona2.imprimir()
print(persona2.piernas)