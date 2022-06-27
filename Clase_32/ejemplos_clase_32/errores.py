# Errores
'''
# Error de sintaxis
print("Hola" 

# Error de nombre
pint("Hola")

# Error de sintaxis: Ejemplo pop() con lista vacía
valores = []
valores.pop()

# Solución a pop() con lista vacía
valores = []
if len(valores) > 0:
    valores.pop()

# Error de sintaxis: Ejemplo lectura de cadena y operación sin conversión a número
n = input("Ingrese un número: ")
m = 4
print("{}/{} = {}".format(n,m,n/m))

# Solución a lectura de cadena y operación sin conversión a número
n = float(input("Ingrese un número: "))
m = 4
print("{}/{} = {}".format(n,m,n/m))
'''