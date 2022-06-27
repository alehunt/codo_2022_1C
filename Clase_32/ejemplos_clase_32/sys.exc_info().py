# Instrucción sys.exc_info()

import sys
import traceback

try:
    arch= open('miArch.txt')
    txt = arch.readline()
    num = int(txt.strip())
# except OSError as err:
#     print("OS error: {0}".format(err))
# except ValueError:
#     print("Error: no se pudo convertir el valor a entero.")
except:
    
    print("Error inesperado:", sys.exc_info()[0]) # Me informa el tipo de excepción (class)
    raise # Re-lanza la excepción

# traceback.print_exc()