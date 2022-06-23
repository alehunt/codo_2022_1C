from a import A
from b import B

class C(B,A):

    def __init__(self):
        print("Soy de la clase C")
        
    def c(self):
        print("Este método es de C")