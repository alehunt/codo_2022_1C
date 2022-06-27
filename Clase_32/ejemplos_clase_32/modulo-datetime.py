# Módulo datetime

from datetime import datetime

dt= datetime.now()                      # Fecha y hora actual

print(dt)                               # Imprime fecha y hora actual
print("Año:", dt.year)                  # Año
print("Mes:", dt.month)                 # Mes
print("Dia:", dt.day)                   # Dia

print("Hora:", dt.hour)                 # Hora
print("Minuto:", dt.minute)             # Minuto
print("Segundo:", dt.second)            # Segundo
print("Microsegundo:", dt.microsecond)  # Microsegundo

print("{}:{}:{}".format(dt.hour, dt.minute, dt.second))
print("{}/{}/{}".format(dt.day, dt.month, dt.year))

dt= datetime(2021,9,28, 11,23)
print(dt) #2021-09-28 11:23:00

# dt.year = 3000 # AttributeError: attribute 'year' of 'datetime.date' objects is not writable
dt = dt.replace(year=3000)
print(dt) #3000-09-28 11:23:00