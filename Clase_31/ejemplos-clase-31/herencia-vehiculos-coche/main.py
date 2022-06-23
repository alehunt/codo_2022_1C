from coche import Coche
from vehiculo import Vehiculo

def main():
    c = Coche("azul", 4, 150, 1200)
    print(c)
    v = Vehiculo("rojo", 2)
    print(v)

if __name__ == "__main__":
    main()