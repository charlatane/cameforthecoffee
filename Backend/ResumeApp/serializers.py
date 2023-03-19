from rest_framework import serializers
from ResumeApp.models import *

class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResumeModel
        fields = (
                'resumeid' ,
                'username' ,
                'name' ,
                'gender',
                'phone',
                'email' ,
                'address' ,
                'education' ,
                'skills' ,
                'achievements' ,
                'experience' ,
                'activities' ,
        )
        

class SaveSerializer(serializers.ModelSerializer):
    class Meta:
        model = SaveModel
        fields = (
                'workid'
                'resumeid' ,
                'username' ,
                'name' ,
                'address' ,
                'gender' ,
                'phone' ,
                'email' ,
                'language' ,
                'experience' ,
                'achievement' ,
                'project' ,
                'activity' ,
                'templateid',
                'templateid'
        )