def ingresarPositivo(msj):
    err= True
    while err:
        try:
            num= float(input(msj))
            if num>=0:
                err=False
            else:
                print("Error: debe ingresar un valor positivo o igual a 0.")
        except (ValueError):
            print("Error: ha ingresado un valor no numérico.")
        except:
            print("Error inesperado.")
        else:
            if not err:
                break
    return num

ingresarPositivo("Ingrese un número positivo: ")