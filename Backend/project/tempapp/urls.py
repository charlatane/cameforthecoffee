from django.urls import path

from . import views

urlpatterns = [
    path('temp/tempview',views.tempview,name=''),
]