from django.conf import settings
from django.conf.urls import url, include
# from django.conf.urls.static import static    # for serving static files directly via url
from django.contrib.auth import views as auth_views
from django.contrib.auth.decorators import login_required, permission_required
from website import views

from django.urls import path, re_path
from django.views.generic.base import RedirectView

# from django.conf.urls import handler404    # if a handler404 function is put into views

urlpatterns = [
    # url(r'^login/$', auth_views.LoginView.as_view(template_name='support/login.html')),
    # url(r'^.*$', RedirectView.as_view(url='login', permanent=False), name='index')

    url(r'^$', views.index, name = 'index'),
    ### url(r'^signup/(?P<comp>\w+)$', views.signup, name = 'signup'), #example of url with key
]

# handler404 = 'appname.views.handler404'    # handling 404 errors
