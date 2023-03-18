from rest_framework import serializers
from tempapp.models import *

class TempSerializer(serializers.ModelSerializer):
    class Meta:
        model = TempModel
        fields = ('TempID',
                  'TempName')