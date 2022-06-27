# Excepciones múltiples
def saludar():
    print("Holis")

class SaldoNegativoException(Exception):
    pass

valor = 30
saludar()

try:
    n = float(input("Ingrese un número divisor: "))
    5/n   
except TypeError:
    print("No se puede dividir el número entre una cadena")
except ValueError:
    print("Debes introducir una cadena que sea un número")
except ZeroDivisionError as ze:
    variable = ze    
    print("No se puede dividir por cero, prueba otro número")
except BaseException as e:
    print("Ha ocurrido un error no previsto", type(e).__name__)
else:
    print("Esto es la gloria")

print("Sigo con las operaciones locas")


