from producto import Producto

class Libro(Producto):

    def __init__(self,referencia,nombre,descripcion,precio,isbn,autor):
        super().__init__(referencia, nombre, descripcion,precio)
        self.isbn = isbn
        self.autor = autor

    def __str__(self):
        return "Libro: {} - {} - {} - {} - {} - {}".format(self.referencia,self.nombre,self.descripcion,self.precio,self.isbn,self.autor)