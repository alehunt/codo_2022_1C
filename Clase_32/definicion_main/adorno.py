from producto import Producto 

class Adorno(Producto):
    def __init__(self,referencia,nombre,descripcion,precio,estilo):
        super().__init__(referencia, nombre, descripcion,precio)
        self.estilo = estilo
    
    def __str__(self):
        return "Adorno: {} - {} - {} - {} - {}".format(self.referencia,self.nombre,self.descripcion,self.precio,self.estilo)