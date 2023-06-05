from rest_framework import serializers
from appsss.models import Mari

class MariSerializer(serializers.ModelSerializer):

    class Meta:
        model = Mari
        fields = "__all__"