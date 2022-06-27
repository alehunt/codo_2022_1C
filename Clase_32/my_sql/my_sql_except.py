import mysql.connector
from mysql.connector import errorcode
import exceptions


def main():
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="Fortin94",
        database="bd_neptuno"
    )

    # Chequear base de datos existentes
    # mycursor = mydb.cursor()
    # mycursor.execute("SHOW DATABASES")
    # for x in mycursor:
    #   print(x)

    # obtención de datos de la tabla cliente
    # mycursor = mydb.cursor()
    # mycursor.execute("SELECT * FROM cliente")
    # myresult = mycursor.fetchall()
    # for cliente in myresult:
    #   print(cliente)
    numero = 0
    mydb_connection = None
    # Testeo de conexión con manejo de error
    try:
        if numero == 0:
            raise exceptions.CodoACodoFatal
        #mydb_connection = mysql.connector.connect(user='root', database='bd_neptuno')
        mydb_connection = mysql.connector.connect(
            host="localhost",
            user="root",
            password="Fortin94",
            database="bd_neptuno"
        )
        mycursor = mydb_connection.cursor()
        mycursor.execute("SELECT * FROM cliente")
        # raise(Exception("Excepción trucha"))

        
        myresult = mycursor.fetchall()
        for cliente in myresult:
            print(cliente)

    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with your user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
    except exceptions.CodoACodoFatal as ex:
        print(ex)
    else:
        print("TE MOSTRÉ TODOS LOS CLIENTES.")
    finally:
        if mydb_connection and mydb_connection.is_connected:
            mydb_connection.close()
    
        
    # try:
    #     #raise exceptions.CodoACodoEspecífica
    #     #raise exceptions.CodoACodoBase
    #     #raise exceptions.CodoACodoFatal
    #     #raise exceptions.CodoACodoFatal("TODO MAL")
    # except BaseException as ex:
    #     print(ex)
    #     pass



if __name__ == "__main__":
    main()