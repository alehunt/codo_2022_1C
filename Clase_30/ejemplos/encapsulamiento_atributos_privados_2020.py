class Cliente:
    ''' 
    Ocultamiento de información:
    
    Los métodos y atributos débilmente privados tienen un único guion bajo al principio. 
    Esto señala que son privados, y no deberían ser utilizados por código externo. 
    Sin embargo, es en su mayor parte solo una convención, y no impide que el código externo los acceda.
    Su único efecto verdadero es que from module_name import * no importará a las variables que empiecen con un único guion bajo.

    Los métodos y atributos fuertemente privados tienen doble guion bajo al principio de sus nombres. 
    Esto hace que sus nombres sean decorados, lo cual significa que no pueden ser accedidos desde afuera de la clase.
    El propósito de esto no es asegurar que se mantengan privados, sino de evitar errores en caso de que existan subclases que tengan métodos o atributos con los mismos nombres.
    
    '''
    #Atributos de clase
    _direccion_banco= "Calle 123" # Atributo debilmente privado
    __nombre_banco= "Santa" # Atributo fuertemente privado

    # Ocultamiento de la información
    # Constructor
    def __init__(self, nombre):
        # Atributo fuertemente privado
        self.__nombre= nombre # Atributo/Variable de instancia
        self.__saldo= 0

    # Muestra info del objeto
    def __str__(self):
        cadena= "Nombre: " + self.nombre + " Saldo: " + str(self.saldo)
        return cadena

    # getter (uso de decoradores)
    @property
    def saldo(self):
        return self.__saldo #Obtiene (get) el saldo, protege la información

    # getter y setter para el atributo privado nombre
    # El orden es importante: 1ro el getter y luego el setter
    @property
    def nombre(self):
        return self.__nombre #Obtiene el nomnre
    
    @nombre.setter
    def nombre(self, nombre): #Repetimos el nombre del método y en el decorador
        self.__nombre= nombre #Es el nombre que le paso como parámetro a la función
    
# Bloque Ppal
cli1= Cliente("Ramiro")
# print(cli1)
# Obtengo el saldo
print("Saldo del Cliente 1:")
# Puedo consultar el saldo de las 2 formas
print(cli1.saldo) # AttributeError: 'Cliente' object has no attribute 'saldo'
                  # Ahora si uso el decorador @property, si me muestra el saldo
# print(cli1.__saldo) # AttributeError: 'Cliente' object has no attribute '__saldo'

# Nota: Los métodos con nombres decorados pueden aún ser accedidos externamente pero por un nombre diferente.
#       El atributo __nombre de la clase Cliente puede ser accedido externamente con _Banco__nombre.
print(cli1._Cliente__saldo) # Los atributos fuertemente privados, también se pueden acceder (en Python)

# getter y setter de saldo
print(cli1.nombre)
cli1.nombre= "Ezequiel Ramiro"  # Establezco el nombre pero a través del setter
                                # La forma de llamar al setter es asignándole un valor
print(cli1)