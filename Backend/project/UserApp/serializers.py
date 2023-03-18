
from rest_framework import serializers
from UserApp.models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('first_name',
                'last_name',
                'username',
                'password',
                'email')