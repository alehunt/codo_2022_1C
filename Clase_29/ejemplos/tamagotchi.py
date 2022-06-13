class Tamagotchi:
    def __init__(self,nombre,hambre,animo,energia):
        self.nombre=nombre
        self.hambre=hambre
        self.animo=animo
        self.energia=energia
                
    def jugar(self):
        self.animo+=1
        self.energia-=1

    def alimentar(self):
        self.animo+=1
        self.hambre-=1

    def dormir(self):
        self.hambre+=1
        self.energia+=1

    def pasar(self):
        self.animo-=1
        self.hambre+=1
        self.energia-=1
      
    def __str__(self):
    #    return ("Nombre:%s Estado: Hambre:%d Animo:%d Energia:%d ") %(self.nombre,self.hambre,self.animo, self.energia)
       cadena= "Nombre: {} \nEstado: Hambre: {} - Animo: {} - Energia: {} ".format(self.nombre, self.hambre, self.animo, self.energia)
       return cadena

# Programa Principal
t=Tamagotchi("Tamagotchito",10,10,10)
t.dormir()
t.jugar()
t.alimentar()
t.pasar()
print(t)
