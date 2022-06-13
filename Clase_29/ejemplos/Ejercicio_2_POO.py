class Alumno: #Creamos la clase

    def inicializar(self,nombre,nota): #Constructor
        self.nombre=nombre
        self.nota=nota

    def imprimir(self): #Mé}todo para mostrar los datos
        print("Nombre: {}".format(self.nombre))
        print("Nota: {}".format(self.nota))

    def mostrar_estado(self): #Método para ver si está aprobado
        if self.nota>=4:
            print("Regular")
        else:
            print("Desaprobado")

# bloque principal

alumno1=Alumno() #Creamos el objeto
alumno1.inicializar("Diego",2) #Le damos 2 atributos (nombre y nota)
alumno1.imprimir() #Imprimimos los datos
alumno1.mostrar_estado() #Vemos si está aprobado

alumno2=Alumno()
alumno2.inicializar("Ana",10)
alumno2.imprimir()
alumno2.mostrar_estado()


