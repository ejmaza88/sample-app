# Generated by Django 3.2.13 on 2022-05-10 15:18
import os

from django.db import migrations


def delete_superuser(apps, schema_editor):
    from django.contrib.auth.models import User

    DJANGO_SU_NAME = os.environ.get('DJANGO_SU_NAME')

    User.objects.get(username=DJANGO_SU_NAME).delete()


def create_superuser(apps, schema_editor):
    from django.contrib.auth.models import User

    DJANGO_SU_NAME = os.environ.get('DJANGO_SU_NAME')
    DJANGO_SU_EMAIL = os.environ.get('DJANGO_SU_EMAIL')
    DJANGO_SU_PASSWORD = os.environ.get('DJANGO_SU_PASSWORD')

    superuser = User.objects.create_superuser(
        username=DJANGO_SU_NAME,
        email=DJANGO_SU_EMAIL,
        password=DJANGO_SU_PASSWORD
    )
    superuser.save()

class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.RunPython(create_superuser, reverse_code=delete_superuser),
    ]
