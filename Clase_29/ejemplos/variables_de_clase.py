class Persona: 
    poblacion = 0

    def __init__(self, nombre):
        Persona.poblacion+=1
        self.nombre=nombre

# Bloque principal
persona1=Persona("Juan") 
print(persona1.poblacion)
persona2=Persona("Ana") 
persona3=Persona("Luis") 

persona1.poder = "Volar"
print(persona1.poder)

print(persona1.nombre) # Juan
print(persona2.nombre) # Ana
print(persona3.nombre) # Luis

print(persona1.variable) # 20
Persona.variable=5
print(persona2.variable) # 5
Persona.variable=99
print(persona1.variable) # 5
print(persona2.variable) # 5
print(persona3.variable) # 5