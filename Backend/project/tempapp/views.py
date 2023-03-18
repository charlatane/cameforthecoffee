from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from tempapp.models import *
from tempapp.serializers import *
from django.core.files.storage import default_storage
from rest_framework.authtoken.models import Token
import sqlite3
import json

# Create your views here.

@csrf_exempt
def tempview(request):
    if request.method == 'GET':
        # headers_token = request.META['HTTP_AUTHORIZATION'][7:]
        # print(headers_token)
        # user = Token.objects.get(key=headers_token).user
        # print(user)
        query = '''SELECT TempID, TempName
        FROM tempapp_tempmodel'''
        # WHERE Freelancer.CategoryID = Category.ID AND auth_user.username = '{var_user}' AND
        # Freelancer.username = '{var_user}' '''.format(var_user=user)
        temp_data = TempModel.objects.raw(query)
        temp_serializer = TempSerializer(temp_data, many=True)
        return JsonResponse(temp_serializer.data, safe=False)