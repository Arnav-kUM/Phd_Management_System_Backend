from django.contrib import admin
from django.urls import path, include
from home import views

urlpatterns = [
    path('', views.index, name='home'),
    # path('add_user/', views.add_user, name='add_user'),
    # path('your-endpoint/', views.my_endpoint, name='check'),
    path('csrf_token/', views.csrf_token, name='csrf_token'),
    path('parameter/', views.parameter, name='parameters'),
]
