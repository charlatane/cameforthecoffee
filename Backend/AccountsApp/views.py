from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework.authtoken.models import Token
import json
import sqlite3

# Create your views here.
@csrf_exempt
def signup(request):
	if request.method=='POST':
		success = False
		try:
			headers_token = request.META['HTTP_AUTHORIZATION'][7:]
			user = Token.objects.get(key=headers_token).user
			print(user)
			data = JSONParser().parse(request)
			name = data['name']
			paytype = data['type']
			contact = data['contact']
			print(name,contact,paytype)
			conn = sqlite3.connect('db.sqlite3')
			cur = conn.cursor()
			query = ""
			if paytype == 'bkash':
				query = '''INSERT INTO userInfo(username, accountType, name, contactNumber, bkash) VALUES ('{var_user}','merchant','{var_name}', '{var_contact}', 1) '''.format(var_user=user,var_name=name, var_contact=contact, var_pay=paytype)
			elif paytype == 'nagad':
				query = '''INSERT INTO userInfo(username, accountType, name, contactNumber, nagad) VALUES ('{var_user}','merchant','{var_name}', '{var_contact}', 1) '''.format(var_user=user,var_name=name, var_contact=contact, var_pay=paytype)
			else:
				query = '''INSERT INTO userInfo(username, accountType, name, contactNumber, bankAccount) VALUES ('{var_user}','merchant','{var_name}', '{var_contact}', 1) '''.format(var_user=user,var_name=name, var_contact=contact, var_pay=paytype)
			cur.execute(query)
			conn.commit()
			cur.close()
			conn.close()
			success = True
		except:
			success = False
		return JsonResponse(success, safe=False) 


@csrf_exempt
def consumerSignup(request):
	if request.method=='POST':
		success = False
		try:
			headers_token = request.META['HTTP_AUTHORIZATION'][7:]
			user = Token.objects.get(key=headers_token).user
			print(user)
			data = JSONParser().parse(request)
			name = data['name']
			contact = data['contact']
			print(name,contact)
			conn = sqlite3.connect('db.sqlite3')
			cur = conn.cursor()
			query = '''INSERT INTO userInfo(username, accountType, name, contactNumber) VALUES ('{var_user}','consumer','{var_name}', '{var_contact}') '''.format(var_user=user,var_name=name, var_contact=contact)
			cur.execute(query)
			conn.commit()
			cur.close()
			conn.close()
			success = True
		except:
			success = False
		return JsonResponse(success, safe=False) 

@csrf_exempt
def updatePayment(request):
	if request.method=='POST':
		success = False
		try:
			headers_token = request.META['HTTP_AUTHORIZATION'][7:]
			user = Token.objects.get(key=headers_token).user
			print(user)
			data = JSONParser().parse(request)
			details = data['details']
			print(details)
			conn = sqlite3.connect('db.sqlite3')
			cur = conn.cursor()
			query = '''Update userInfo SET paymentMethodDetails = '{var_details}' where username = '{var_user}' '''.format(var_details=details, var_user=user)
			cur.execute(query)
			conn.commit()
			cur.close()
			conn.close()
			success = True
		except:
			success = False
		return JsonResponse(success, safe=False) 


@csrf_exempt
def getType(request):
	if request.method=='GET':
		result = ""
		try:
			headers_token = request.META['HTTP_AUTHORIZATION'][7:]
			user = Token.objects.get(key=headers_token).user
			print(user)
			
			conn = sqlite3.connect('db.sqlite3')
			cur = conn.cursor()
			query = '''select accountType from userInfo where username = '{var_user}' '''.format(var_user=user)
			cur.execute(query)
			result = cur.fetchone()[0]
			print(result)
			
			cur.close()
			conn.close()
			
		except:
			result = ""
		return JsonResponse(result, safe=False) 
