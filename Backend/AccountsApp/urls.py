from django.conf.urls import url, include
from django.urls import path
from . import views

auth_urlpatterns = [
    url(r'^api/v1/', include('djoser.urls')),
    url(r'^api/v1/', include('djoser.urls.authtoken')),
]

urlpatterns = [
    path('merchant/signup',views.signup,name=''),
   
    path('account/type',views.getType,name='')
]