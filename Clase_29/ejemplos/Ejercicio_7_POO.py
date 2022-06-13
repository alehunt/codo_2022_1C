# ------------------------- Clase Cliente -------------------------
class Cliente:

    def __init__(self,nombre):
        self.nombre=nombre 
        self.monto=0

    def depositar(self,monto):
        self.monto=self.monto+monto

    def extraer(self,monto):
        self.monto=self.monto-monto

    def retornar_monto(self):
        return self.monto

    def imprimir(self):
        print("{} tiene depositada la suma de {}".format(self.nombre,self.monto))

# ------------------------- Clase Banco -------------------------
class Banco:

    def __init__(self):
        self.cliente1=Cliente("Juan")
        self.cliente2=Cliente("Ana")
        self.cliente3=Cliente("Diego")

    def operar(self):
        self.cliente1.depositar(100)
        self.cliente2.depositar(150)
        self.cliente3.depositar(200)
        self.cliente3.extraer(150)

    def depositos_totales(self):
        total=self.cliente1.retornar_monto()+self.cliente2.retornar_monto()+self.cliente3.retornar_monto()
        print("El total de dinero del banco es: {}".format(total))
        self.cliente1.imprimir()
        self.cliente2.imprimir()
        self.cliente3.imprimir()

# ------------------------- Programa principal -------------------------
banco1=Banco()
banco1.operar()
banco1.depositos_totales()