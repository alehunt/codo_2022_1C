import random

print("---------------------Aleatoriedad---------------------")
#Aleatoriedad
# Flotante aleatorio >= 0 y < 1.0
print(random.random())      

# Flotante aleatorio >= 1 y <10.0       
print(random.uniform(1,10))

# Entero aleatorio de 0 a 9, 10 excluído
print(random.randrange(10))

# Entero aleatorio de 0 a 100
print(random.randrange(0,101))

# Entero aleatorio de 0 a 100 cada 2 números, múltiples de 2
print(random.randrange(0,101,2))

# Entero aleatorio de 0 a 100 cada 5 números, múltiples de 5
print(random.randrange(0,101,5))

#Muestras
print("---------------------Muestras---------------------")
# Letra aleatoria
print(random.choice('Hola mundo'))

# Elemento aleatorio
print(random.choice([1,2,3,4,5]))

# Dos elementos aleatorios
print(random.sample([1,2,3,4,5], 2))

#Mezclas
print("---------------------Mezclas---------------------")

# Barajar una lista, queda guardado
lista = [1,2,3,4,5]
random.shuffle(lista)
print(lista)