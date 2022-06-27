# Excepciones: Bloques try - except

# n = float(input("Ingrese un número: "))
# m = 4
# print("{}/{} = {}".format(n,m,n/m))
# ----------------

# try:
#     n = float(input("Ingrese un número: "))
#     m = 4
#     print("{}/{} = {}".format(n,m,n/m))
# except:
#     print("Ha ocurrido un error, introduzca un número")





# ----------------
# while(True):
#     try:
#         n = float(input("Ingrese un número: "))
#         m = 4
#         print("{}/{} = {}".format(n,m,n/m))
#         break # Importante romper la iteración si todo ha salido bien
#     except:
#         print("Ha ocurrido un error, introduzca un número")
# ----------------
# numero_cargado = False
# while(not numero_cargado):
#     try:
#         n = float(input("Ingrese un número: "))
#         m = 4
#         print("{}/{} = {}".format(n,m,n/m))
#     except:
#         print("Ha ocurrido un error, introduzca un número")
#     else:
#         print("Todo ha funcionado correctamente")
#         numero_cargado = True
    
# print ("ODIO EL BREAK")       
# ----------------

# while(True):
#     try:
#         n = float(input("Ingrese un número: "))
#         m = 4
#         print("{}/{} = {}".format(n,m,n/m))
#     except:
#         print("Ha ocurrido un error, introduzca un número")
#     else:
#         print("Todo ha funcionado correctamente")
#         break # Importante romper la iteración si todo ha salido bien
#     finally:
#         print("Fin de la iteración") # Siempre se ejecuta
