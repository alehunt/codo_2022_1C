from django.contrib import admin
from .models import Estudiante, Member

# Register your models here.
admin.site.register(Member)
admin.site.register(Estudiante)