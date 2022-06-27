class CodoACodoEspecífica(Exception):
    pass

class CodoACodoBase(BaseException):
    pass


class CodoACodoFatal(BaseException):
    def __init__(self, message="Se pudrió todo"):
        super().__init__(message)