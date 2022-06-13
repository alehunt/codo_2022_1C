from time import process_time_ns

class Producto:
    contandor_instancias = 0
    
    def __init__(self, pNombre, pPrecio):
        Producto.contandor_instancias += 1
        print("Soy un nuevo producto")
        self.nombre = pNombre
        self.precio = pPrecio

    def __del__(self):
        print("No sirve mas")

    def __str__(self):
        return f"Soy el producto {self.nombre} y salgo {self.precio}"

mi_producto = Producto("Pelota", 20)
print(mi_producto.contandor_instancias)
otro_producto = Producto("Zapatilla", 200)
print(otro_producto.contandor_instancias)
Producto.contandor_instancias = 8
print(mi_producto.contandor_instancias)
print(otro_producto.contandor_instancias)


print(mi_producto)

print(type(mi_producto))
print(mi_producto.nombre)

mi_producto.nombre = "Zapatilla"
mi_producto.precio = 20

print(mi_producto.nombre)


class Perro:
    # Atributo de Clase
    genero= "Canis"
    
    def __init__(self, nombre, edad):
        print("Nacio un perrito")
        self.nombre = nombre
        self.edad = edad

    def __del__(self):
        print("He tenido una buena vida..")

    # Método de instancia
    def imprimir(self): 
        self.ladrar("Guau")
        return f'{self.nombre} tiene {self.edad} años.'
    # Otro método de instancia
    def ladrar(self, sonido):
        return f'{self.nombre} dice {sonido}.'

    # Se puede reemplazar el método imprimir() con __str__()
    def __str__(self):
        return f'{self.nombre} tiene {self.edad} años.'

miMascota = Perro("Paka", 11)

print(miMascota)


print(miMascota.nombre)
miMascota.imprimir()
miMascota.ladrar("Guau guau!")

print("Género:", miMascota.genero)
print(miMascota.imprimir())
print(miMascota.ladrar("Guau, guau!"))
print(miMascota)

miMascota = None

print("Se terminó el susper sistema")


