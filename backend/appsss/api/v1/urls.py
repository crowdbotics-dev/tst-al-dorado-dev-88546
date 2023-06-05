
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import MariViewSet
router = DefaultRouter()
router.register('mari', MariViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
