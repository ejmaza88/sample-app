from django.urls import path

from . import views

app_name = 'app'


"""
LINQS URLS
"""
urlpatterns = [
    path('', views.home, name='home'),
]
