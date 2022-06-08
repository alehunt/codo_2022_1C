lambda_func = lambda x: x**2  # Función que acepta un número entero y devuelve su cuadrado
print(lambda_func(3))         # Retorna 9

lambda_func = lambda x: True if x**2 >= 10 else False
print(lambda_func(3))        # Retorna False
print(lambda_func(4))        # Retorna True