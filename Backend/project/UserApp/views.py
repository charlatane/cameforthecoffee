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
def signup(request):
    if request.method=='POST':
        # headers_token = request.META['HTTP_AUTHORIZATION'][7:]
        # print(headers_token)
        # user = Token.objects.get(key=headers_token).user
        # print(user)

        data = JSONParser().parse(request)
        first_name = data['first_name']
        last_name = data['last_name']
        username = data['username']
        password = data['password']
        email = data['email']

        query = '''INSERT OR REPLACE INTO UserApp_usermodel(first_name,last_name,username,password,email) VALUES
        ('{first_name}','{last_name}','{username}','{password}','{email}')
        '''.format(first_name=first_name, last_name=last_name, password=password,username=username,email=email)

        conn = sqlite3.connect('db.sqlite3')
        cur = conn.cursor()
        cur.execute(query)
        conn.commit()
        cur.close()
        conn.close()
        return JsonResponse("success", safe=False)

@csrf_exempt
def login(request):
    if request.method=='POST':
        # headers_token = request.META['HTTP_AUTHORIZATION'][7:]
        # print(headers_token)
        # user = Token.objects.get(key=headers_token).user
        # print(user)
        success = False
        data = JSONParser().parse(request)
        username = data['username']
        password = data['password']

        print(username,password)

        conn = sqlite3.connect('db.sqlite3')
        cur = conn.cursor()

        query = ''' SELECT password FROM UserApp_usermodel WHERE username = '{var_user}' 
        '''.format(var_user=username)
        cur.execute(query)
        fetch_password = cur.fetchone()[0]

        if fetch_password == password:
            success = True

        else:
            success = False

        cur.close()
        conn.close()
        
        return JsonResponse(success, safe=False)
