from django.db import models

# Create your models here.

class Estudiante(models.Model):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=100)
    tiempo = models.IntegerField(verbose_name="TIEMPAZO")

    def __str__(self) -> str:
        return "El estudiante es " + self.nombre

class Member(models.Model):
    firstname = models.CharField(max_length=40)
    lastname = models.CharField(max_length=40)

    def __str__(self):
        return self.firstname + " " + self.lastname