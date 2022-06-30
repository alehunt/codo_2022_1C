from django.db import models
from django.db.models import fields

# Create your models here.
class Cliente(models.Model):
    codigo = fields.CharField(max_length=30)

    def __str__(self) -> str:
        return str(self.codigo)