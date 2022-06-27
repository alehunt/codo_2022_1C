# raise

x = -1
if x < 0:
    raise Exception("No se aceptan números menores a cero.")

x = "Hola Mundo"
if not type(x) is int:
    raise TypeError("Sólo se admiten valores enteros.")