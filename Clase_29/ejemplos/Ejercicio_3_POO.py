class Empleado:

    def __init__(self):
        self.nombre=input("Ingrese el nombre del empleado: ")
        self.sueldo=float(input("Ingrese el sueldo: "))

    def __del__(self):
        print('Método delete llamado')

    def imprimir(self):
         print("Nombre: {}".format(self.nombre))
         print("Sueldo: {}".format(self.sueldo))
        #  print("Nombre: {} - Sueldo {}".format(self.nombre, self.sueldo))

    def paga_impuestos(self):
        if self.sueldo>3000:
            print("Debe pagar impuestos")
        else:
            print("No paga impuestos")

# Bloque Principal
empleado1=Empleado()
empleado1.imprimir()
empleado1.paga_impuestos()
