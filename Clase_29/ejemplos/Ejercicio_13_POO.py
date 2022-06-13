#Getters y Setters
class ListadoBebidas:

    def __init__(self):
        self._bebida = 'Naranja'
        self._bebidas_validas = ['Naranja', 'Manzana']

    # Encapsulamiento: atributos privados
    # decorador @property
    # https://codigofacilito.com/articulos/decoradores-python
    @property
    def bebida(self):
        return "La bebida oficial es: {}".format(self._bebida)

    @bebida.setter
    def bebida(self, bebida):
        self._bebida = bebida

bebidas = ListadoBebidas()
print(bebidas.bebida)
bebidas.bebida = 'Limonada'
print(bebidas.bebida)