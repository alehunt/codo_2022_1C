class Vehiculo():

    def __init__(self, color, ruedas):
        self.color= color
        self.ruedas= ruedas
    
    def __str__(self):
        return "Color: {} - Ruedas: {}".format(self.color, self.ruedas)

    def calcular_precio(self):
        return 20
    
# Herencia (simple: de una única superclase)
class Auto(Vehiculo):

    def __init__(self, color, ruedas, velocidad): #Constructor de la clase auto 
                                                  #Se colocan color y ruedas porque derivan de la clase vehículo
        # Vehiculo.__init__(self, color, ruedas) # Llamada al método constructor de la superclase 
        super().__init__(color, ruedas) #Invocamos al constructor de la superclase (reemplaza a lo de arriba)
        self.velocidad= velocidad

    # sobreescritura del método especial/mágico str
    # def __str__(self):    
    #     return super().__str__() + " - Velocidad: " + str(self.velocidad) #le agregamos la velocidad
    def __str__(self):
        return "Velocidad: " + str(self.velocidad) #le agregamos la velocidad



class Moto(Vehiculo):
    def __init__(self, color, ruedas, casco): 
        super().__init__(color, ruedas) 
        self.casco = casco
    
    def calcular_precio(self):
        return super().calcular_precio() + 5

class Bicimoto(Moto):
    def __init__(self, color, ruedas, casco, ruido): 
        super().__init__(color, ruedas, casco) 
        self.ruido = ruido

# Programa principal
v1= Vehiculo("Blanco",2)
a1= Auto("Rojo",4,140)
a2= Auto("Negro",4,180)
a3= Auto("Azul",4,200)
moto_1 = Moto("Amarilla", 2, True)
bici_moto = Bicimoto("Negra", 2, True, 1000)

print(bici_moto.calcular_precio())
vehiculos= []
vehiculos.append(v1)
vehiculos.append(a1)
vehiculos.append(3)
vehiculos.append(moto_1)
vehiculos.append(bici_moto)

for vehiculo in vehiculos:
    if isinstance(vehiculo, Vehiculo):
        print("El precio es " + str(vehiculo.calcular_precio()))


print(v1)
print(a1)
print(a2)
print(a3)
print(moto_1)
print(bici_moto)


vehiculos= []
vehiculos.append(v1)
vehiculos.append(a1)
vehiculos.append(a2)
vehiculos.append(a3)

#Polimorfismo
print(vehiculos[0])
print(vehiculos[2])

# Muestro todos los Vehículos (Vehículo o Auto)
print("Listado de vehículos: ")
for un_vehiculo in vehiculos:
    print(un_vehiculo)