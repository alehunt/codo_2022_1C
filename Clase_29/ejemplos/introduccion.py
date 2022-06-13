#Clases y Objetos
#Definiendo nuestra primer clase
class Persona:
    nombre = ""
    edad = 15
    
    #Para poder inicializar el objeto voy a necesitar al objeto mismo (self) y un dato más
    #que va a ser el nombre. self es un atributo que permite definir al objeto a sí mismo.
    def inicializar(self, nom, e): #Le damos un estado inicial (es una función dentro de la clase)
        self.nombre = nom #Cuando inicialice quiero que cambie su nombre (self) por el nombre que le pasamos
        self.edad= e

    def imprimir(self):
        print("Nombre: {}".format(self.nombre) ) #Mostramos la información del propio objeto: nombre

    def cumplir(self):
        #asdsad
        #sda
        edad += 1

    def mayor_edad(self):
        if self.edad>=18:
            print("Es mayor de edad")
        else:
            print("Es menor de edad")



#Programa principal
#Instanciar (crear) el objeto de tipo Persona
persona1= Persona() #Llamamos a la clase y creamos el objeto
persona1.imprimir() # El Nombre está vacío
persona1.inicializar("Juan Pablo", 25) #No es necesario pasar el sefl 
persona1.imprimir() #No tengo que pasarle un parámetro porque Python entiende que debo usar los proios datos del objeto



persona2= Persona() #Es otra persona creada a partir de la misma clase, otra instancia, otro objeto
persona2.inicializar("Carla", 33) #El cambio de estado está asociado a este objeto
persona2.imprimir()

persona3= Persona()
persona3.inicializar("Pedro", 15)
persona3.imprimir()
persona1.mayor_edad()
persona2.mayor_edad()
persona3.mayor_edad()




lista_de_objetos = [persona1, persona2, persona3]

