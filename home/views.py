from django.shortcuts import render, HttpResponse
import mysql.connector as sql
from django.http import JsonResponse
# Create your views here.

def index(request):
    # D = sql.connect(host ='127.0.0.1',
    #                                 port = "3306",
    #                                 user = 'root',
    #                                 password = 'Arnav@123',
    #                                 database = 'arnav')
    # cursor = D.cursor()
    # query = "select * from employee"
    # cursor.execute(query)
    # y = {}
    # for i in cursor:
    #     y['v1'] = i[0]
    #     y['v2'] = i[1]
    #     y['v3'] = i[2]
    # data = {
    #     'var' : 'Arnav'
    # }
    return render(request,'index.html')

