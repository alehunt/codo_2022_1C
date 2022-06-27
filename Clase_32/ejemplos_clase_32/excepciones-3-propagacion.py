# Propagación de excepciones
def funcion(x, y):
  print("antes")
  # try:
  div = x/y
  # except ZeroDivisionError:
  #   print("Logueo todo")
  #   raise ValueError("Parametros incorrectos")

  print("después")
  return div

def main():
  x = float(input('x: '))
  y = float(input('y: '))

  try:

    print(funcion(x, y))

  except ZeroDivisionError as error:
    print("Pusiste un cero no seas gil")
  except BaseException:
    print("La funcion no anda")

  print("listo")


main()
