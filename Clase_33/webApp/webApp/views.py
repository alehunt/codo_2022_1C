from django.http import HttpResponse
from datetime import date, datetime

from django.shortcuts import render

def saludo(request):
    return HttpResponse("Hola a todos!")

def saludo_html(request):
    documento= """<html><body><h1>Hola a todos! {0} </h1></body></html>""".format(datetime.now())
    return HttpResponse(documento)


def despedida(request):
    return HttpResponse("Adiositoos")


def calcular_edad(request,edad,agno):
    periodo=agno-2021
    edad_futura=edad+periodo
    documento="<html><body><h2>En el año %s tendrás %s años"%(agno,edad_futura)
    return HttpResponse(documento)

def curso(request):
    fecha = "Es miercoles"
    return render(request,"curso.html",{"ahora":fecha})