from django.contrib import admin
from django.urls import path, include, re_path
from api.views import FrontendAppView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),  # your ML API
    re_path(r'^.*$', FrontendAppView.as_view()),  # React frontend fallback
]
