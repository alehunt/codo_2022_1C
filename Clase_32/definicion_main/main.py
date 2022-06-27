from producto import Producto
from alimento import Alimento
from adorno import Adorno
from libro import Libro

def main():
    producto = Producto(2033,"Producto Genérico","1 kg",50)
    alimento = Alimento(2035, "Botella de Aceite de Oliva","250 ML",50,"Marca","Distribuidor")
    adorno = Adorno(2034, "Vaso adornado", "Vaso de porcelana",34,"De Mesa")
    libro = Libro(2036, "Cocina Mediterránea","Recetas buenas",75,"0-123456-78-9","Autor")

    productos = [producto,alimento,adorno]
    productos.append(libro)
    # print(productos)

    print("Recorriendo lista de productos:")
    for producto in productos:
        print(producto)

    print("Recorriendo lista de productos (atributos):")
    for producto in productos:
        print(producto.referencia, producto.nombre)

    # for producto in productos:
    #     print(producto.autor) #Esto da error

    print("Condicional isInstance():")
    for producto_r in productos:
        if(isinstance(producto_r, Adorno)):
            print(producto_r.referencia, producto_r.nombre, producto_r.estilo)
        elif(isinstance(producto_r, Alimento)):
            print(producto_r.referencia, producto_r.nombre, producto_r.productor)
        elif(isinstance(producto_r, Libro)):
            print(producto_r.referencia, producto_r.nombre, producto_r.isbn) 

    # print("Rebajar lista de productos:")

    # for producto_r in productos:
    #     producto_r.rebajar_producto(10)
    #     print(producto_r)

if __name__ == "__main__":
    main()