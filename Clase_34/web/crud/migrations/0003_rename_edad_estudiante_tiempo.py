# Generated by Django 3.2 on 2022-07-04 22:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('crud', '0002_auto_20220704_1856'),
    ]

    operations = [
        migrations.RenameField(
            model_name='estudiante',
            old_name='edad',
            new_name='tiempo',
        ),
    ]
