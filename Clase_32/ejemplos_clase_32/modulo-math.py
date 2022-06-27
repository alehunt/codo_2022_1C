import math # Importamos el módulo math

# Reondeo
print(math.floor(3.99))  # Redondeo a la baja (suelo)
print(math.ceil(3.01))   # Redondeo al alta (techo)

# Sumatoria mejorada
numeros = [0.9999999, 1, 2, 3]
print(math.fsum(numeros)) # 6.9999999

# Truncamiento
print(math.trunc(123.45)) # 123

# Potencias y raíces
print(math.pow(2, 3))  # Potencia con flotante 
print(math.sqrt(9))    # Raíz cuadrada (square root)

# Constantes
print(math.pi)  # Constante pi
print(math.e)   # Constante e