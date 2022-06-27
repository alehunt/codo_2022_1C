class Producto:
    def __init__(self,referencia,nombre,descripcion,precio):
        self.referencia = referencia
        self.nombre = nombre
        self.descripcion = descripcion
        self.precio = precio

    def __str__(self):
        return "Producto: {} - {} - {} - {}".format(self.referencia,self.nombre,self.descripcion,self.precio)

    def rebajar_producto(self,rebaja):
        self.precio = self.precio - rebaja


def main():
    print("Estoy en el producto re loco")
    vehiculo = Producto("", "", "", "")
    print(vehiculo)

if __name__ == "producto":
    main()



