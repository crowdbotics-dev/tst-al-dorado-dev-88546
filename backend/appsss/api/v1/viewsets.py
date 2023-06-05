from rest_framework import authentication
from appsss.models import Mari
from .serializers import MariSerializer
from rest_framework import viewsets

class MariViewSet(viewsets.ModelViewSet):
    serializer_class = MariSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Mari.objects.all()