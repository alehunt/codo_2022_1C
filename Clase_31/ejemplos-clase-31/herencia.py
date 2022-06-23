class Producto:
    def __init__(self, referencia, nombre,
                descripcion, precio):
        self.referencia = referencia
        self.nombre = nombre
        self.descripcion = descripcion
        self.precio = precio

    def __str__(self):
        return "Producto: {} - {} - {} - {}".format(self.referencia,self.nombre,self.descripcion,self.precio)

class Adorno(Producto):
    pass

adorno = Adorno(2034, "Vaso adornado", "Vaso de porcelana", 15)
print(adorno)

class Alimento(Producto):
    productor = ""
    distribuidor = ""

    def __str__(self):
         return "Referencia: {} \nNombre: {} \nDescripción: {} \nPrecio: {} \nProductor: {} \nDistribuidor: {}".format(self.referencia, self.nombre, self.descripcion, self.precio, self.productor, self.distribuidor)

class Libro(Producto):
    isbn = ""
    autor = ""

    def __str__(self):
         return "Referencia: {} \nNombre: {} \nDescripción: {} \nPrecio: {} \nISBN: {} \nAutor: {}".format(self.referencia, self.nombre, self.descripcion, self.precio, self.isbn, self.autor)

#Programa principal
alimento = Alimento(2035, "Botella de Aceite de Oliva", "250 ML", 5)
alimento.productor = "La Aceitera"
alimento.distribuidor = "Distribuciones SA"
print(alimento)

libro = Libro(2036, "Cocina Mediterránea","Recetas sanas y buenas", 9)
libro.isbn = "0-123456-78-9"
libro.autor = "Doña Juana"
print(libro)    