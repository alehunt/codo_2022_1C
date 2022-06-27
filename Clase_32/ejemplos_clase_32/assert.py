def ingresarNatural(msj):
    while True:
        try:
            valorReal= float(input(msj))
            valor= int(valorReal)
            assert (valor == valorReal), "Error: debe ingresar un valor entero."
            assert (valor > 0), "Error: debe ingresar un valor positivo."
            break
        except AssertionError as error:
            print(error)
        except (ValueError):
            print("Error: ha ingresado un valor que no es numérico.")
        except:
            print("Error inesperado.")
        return valor

# Programa principal
def __main__():
    msj= "Ingrese un número natural: "
    num= ingresarNatural(msj)
    print(num)

if __name__ == '__main__':
    __main__()