# Módulo collections: colecciones de datos

from collections import Counter

numeros = [1,2,3,4,1,2,3,1,2,1]
print(Counter(numeros)) #Counter({1: 4, 2: 3, 3: 2, 4: 1})

print(Counter("palabra")) #Counter({'a': 3, 'p': 1, 'l': 1, 'b': 1, 'r': 1})

coches= "mercedes ferrari bmw bmw ferrari bmw"
print(Counter(coches.split())) #Counter({'bmw': 3, 'ferrari': 2, 'mercedes': 1})

animales= "perro gato jirafa jirafa gato jirafa"
a= Counter(animales.split())
print(a.most_common(1)) #Elemento más repetido
print(a.most_common(2)) #Las dos palabras más repetidas
print(a.most_common())  #Ordenado por número de repeticiones