# Módulo copy: copia de objetos

from copy import copy

a = list(range(5))
print(a) # [0, 1, 2, 3, 4]

b = a
print(b) #[0, 1, 2, 3, 4]

b.append(5)
print(a) #[0, 1, 2, 3, 4, 5]
del a[2]
print(b) #[0, 1, 3, 4, 5]
print(a is b) #True

a = list(range(5))
b = copy(a)
print(a is b) #False

b.append(5)
del a[0]

print(a) #[1, 2, 3, 4]
print(b) #[0, 1, 2, 3, 4, 5]

