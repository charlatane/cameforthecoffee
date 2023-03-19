from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from ResumeApp.models import *
from ResumeApp.serializers import *
from django.core.files.storage import default_storage
from rest_framework.authtoken.models import Token
import sqlite3
import json

# Create your views here.

@csrf_exempt
def save_info(request):
    if request.method=='POST':
        headers_token = request.META['HTTP_AUTHORIZATION'][7:]
        print(headers_token)
        user = Token.objects.get(key=headers_token).user
        print(user)

        conn = sqlite3.connect('db.sqlite3')
        cur = conn.cursor()

        success = False

        data = JSONParser().parse(request)
        #resumeid = data['resumeid']
        username = data['username']
        name = data['name']
        gender = data['gender']
        phone = data['phone']
        email = data['email']
        address = data['address']    
        education = data['education']
        experience = data['experience']
        achievements = data['achievements']
        skills = data['skills']
        activities = data['activities']
        
        # query = '''INSERT INTO ResumeApp_resumemodel(username,name,address,
        # gender,phone,email,education,experience,achievements,skills,activities) VALUES
        # ('{username}','{name}','{address}','{gender}','{phone}','{email}','{education}','{experience}',
        # '{achievements}','{skills}','{activities}')
        # '''.format(username=username,name=name,address=address,gender=gender,phone=phone,email=email,education=education,experience=experience,achievements=achievements,skills=skills,activities=activities)
        
        query = '''INSERT INTO ResumeApp_resumemodel(username,name,address,gender,phone,email,education,experience,achievements,skills,
        activities) VALUES
        ('{username}','{name}','{address}','{gender}','{phone}','{email}','{education}','{experience}',
        '{achievements}','{skills}','{activities}')'''.format(
            name = name,
            username = user,
            address = address,
            gender = gender,
            phone = phone,
            email = email,
            education = education,
            experience = experience,
            achievements = achievements,
            skills = skills,
            activities = activities
        )

        print(query)
        
        cur.execute(query)
        conn.commit()

        query = '''SELECT resumeid FROM ResumeApp_resumemodel ORDER BY resumeid DESC'''
        cur.execute(query)
        id = cur.fetchone()[0]
        cur.close()
        conn.close()
        success = id
        return JsonResponse(success, safe=False)

@csrf_exempt
def get_info(request,id):       
    if request.method == 'GET':
        # headers_token = request.META['HTTP_AUTHORIZATION'][7:]
        # print(headers_token)
        # user = Token.objects.get(key=headers_token).user
        # print(user)
        conn = sqlite3.connect('db.sqlite3')
        cur = conn.cursor()
        print(id)
        
        query = '''SELECT * FROM
        ResumeApp_resumemodel where resumeid = '{var_resumeid}'
        '''.format(var_resumeid=id)

        #cur.execute(query)

        resume_model = ResumeModel.objects.raw(query)
        resume_serializer = ResumeSerializer(resume_model, many=True)

        cur.close()
        conn.close()

        print(resume_serializer.data)

        return JsonResponse(resume_serializer.data, safe=False)

@csrf_exempt
def save_info(request):
    if request.method=='POST':
        headers_token = request.META['HTTP_AUTHORIZATION'][7:]
        print(headers_token)
        user = Token.objects.get(key=headers_token).user
        print(user)

        conn = sqlite3.connect('db.sqlite3')
        cur = conn.cursor()

        success = False

        data = JSONParser().parse(request)
        #resumeid = data['resumeid']
        username = data['username']
        name = data['name']
        gender = data['gender']
        phone = data['phone']
        email = data['email']
        address = data['address']    
        education = data['education']
        experience = data['experience']
        achievements = data['achievements']
        skills = data['skills']
        activities = data['activities']
        workid = data['workid']
        resumeid = data['resumeid']
        templateid = data['templateid']
        
        # query = '''INSERT INTO ResumeApp_resumemodel(username,name,address,
        # gender,phone,email,education,experience,achievements,skills,activities) VALUES
        # ('{username}','{name}','{address}','{gender}','{phone}','{email}','{education}','{experience}',
        # '{achievements}','{skills}','{activities}')
        # '''.format(username=username,name=name,address=address,gender=gender,phone=phone,email=email,education=education,experience=experience,achievements=achievements,skills=skills,activities=activities)
        
        query = '''INSERT INTO ResumeApp_resumemodel(workid,resumeid,username,name,address,gender,phone,email,education,experience,achievements,skills,
        activities) VALUES
        ('{workid}','{resumeid}','{username}','{name}','{address}','{gender}','{phone}','{email}','{education}','{experience}',
        '{achievements}','{skills}','{activities}','{templateid}')'''.format(
            name = name,
            username = user,
            address = address,
            gender = gender,
            phone = phone,
            email = email,
            education = education,
            experience = experience,
            achievements = achievements,
            skills = skills,
            activities = activities,
            workid=workid,
            resumeid=resumeid,
            templateid=templateid
        )

        print(query)
        
        cur.execute(query)
        conn.commit()

        query = '''SELECT workid FROM ResumeApp_savemodel ORDER BY resumeid DESC'''
        cur.execute(query)
        id = cur.fetchone()[0]
        cur.close()
        conn.close()
        success = id
        return JsonResponse(success, safe=False)

# @csrf_exempt
# def save_work(request):       
#        if request.method=='POST':
#         # headers_token = request.META['HTTP_AUTHORIZATION'][7:]
#         # print(headers_token)
#         # user = Token.objects.get(key=headers_token).user
#         # print(user)

#         data = JSONParser().parse(request)
#         saveid = data['saveid']
#         username = data['username']
#         name = data['name']
#         address = data['address']
#         gender = data['gender']
#         phone = data['phone']
#         email = data['email']
#         language = data['language']
#         experience = data['experience']
#         achievement = data['achievement']
#         project = data['project']
#         activity = data['activity']
#         templateid = data['templateid']
        
#         query = '''INSERT OR REPLACE INTO ResumeApp_savemodel(saveid, username,name,address,gender,phone,email,language,experience,achievement,project,activity,templateid) VALUES
#         ('{saveid}','{username}','{name}','{address}','{gender}','{phone}','{email}','{language}','{experience}','{achievement}','{project}','{activity}','{templateid}')
#         '''.format(saveid=saveid, username=username,name=name,
#         address=address,gender=gender,phone=phone,email=email,language=language,
#         experience=experience,achievement=achievement,project=project,activity=activity,templateid=templateid)

#         conn = sqlite3.connect('db.sqlite3')
#         cur = conn.cursor()
#         cur.execute(query)
#         conn.commit()
#         cur.close()
#         conn.close()
#         return JsonResponse("success", safe=False)

