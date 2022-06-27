# Ejercicio 1: resultado = 10/0
try:
    resultado = 10/0
except:
    print("No es posible dividir entre cero")

# Ejercicio 2: lista = [1, 2, 3, 4, 5]
# lista[10]
lista = [1, 2, 3, 4, 5]
try:
    lista[10]
except IndexError:
    print("El índice se encuentra fuera de rango")

# Ejercicio 3: colores = { 'rojo':'red', 'verde':'green', 'negro':'black' } 
# colores['blanco']
colores = { 'rojo':'red', 'verde':'green', 'negro':'black' } 
try:
    colores['blanco']
except KeyError:
    print("La clave del diccionario no se encuentra")

# Ejercicio 4: resultado = 15 + "20"
try:
    resultado = 15 + "20"
except TypeError:
    print("Sólo es posible sumar datos del mismo tipo")

