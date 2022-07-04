from django.conf.urls import url
from . import views

urlpatterns= [
    url('^$', views.index, name='index'),
    url('^create$', views.create, name='create'),
    url('^edit/(?P<id>\d+)$', views.edit, name='edit'),
    url('^edit/update/(?P<id>\d+)$', views.update, name='update'),
    url('^delete/(?P<id>\d+)$', views.delete, name='delete'),
    url('^about$', views.about, name='about'),
]