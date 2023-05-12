from rest_framework.response import Response
from . import utils
# from google.oauth2 import id_token
# from google.auth.transport import requests
from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import AllowAny
from rest_framework.response import Response
# from django.contrib.auth import get_user_model
# from rest_framework.authtoken.models import Token
# from django.contrib.auth.decorators import login_required, user_passes_test
from django.views.decorators.csrf import csrf_exempt


def is_admin(user):
    return user.is_staff

# @login_required
# @user_passes_test(is_admin)
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/student_database',
            'method': 'GET',
            'body': None,
            'description': 'Returns all student database'
        },
        {
            'Endpoint': '/student/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single student data'
        },
        {
            'Endpoint': '/student/add_new/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Adds a new Student data to the database'
        },
        {
            'Endpoint': '/student/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Update a student\'s information in the database'
        },
    ]
    return Response(routes)

# @login_required
# @user_passes_test(is_admin)
@api_view(['GET', 'PUT'])
def StudentbyID_Requests(request, pk):
    if request.method == 'GET':
        return utils.getStudentbyID(request, pk)
    
    if request.method == 'PUT':
        return utils.editStudentByID(request, pk)

# @login_required
# @user_passes_test(is_admin)
@api_view(['POST'])
def AllStudents_Requests(request):
    return utils.getStudents(request)

# @login_required 
# @user_passes_test(is_admin)
@api_view(['POST'])
def AddStudents_Request(request):
    return utils.addStudents(request)

# @login_required 
# @user_passes_test(is_admin)
@api_view(['POST'])
def AddStudents_Request_csv(request):
    return utils.add_students_from_csv(request)
    

# @login_required  
# @user_passes_test(is_admin)  
@api_view(['GET', 'POST'])
def Logbook_Requests(request, pk):
    if request.method == 'GET':
        return utils.getLog(request, pk)
    
    if request.method == 'POST':
        return utils.newLog(request, pk)

# @login_required 
# @user_passes_test(is_admin)  
@api_view(['PUT', 'DELETE'])
def Log_Requests(request, pk):
    if request.method == 'PUT':
        return utils.editLog(request, pk)
    
    if request.method == 'DELETE':
        return utils.deleteLog(request, pk)

# @login_required  
# @user_passes_test(is_admin)  
@api_view(['GET'])
def Value_Requests(request, table_name, column_name):
    return utils.get_distinct_values(request, table_name, column_name)

# @login_required
# @user_passes_test(is_admin)
@api_view(['GET'])
def Field_Requests(request, table_name):
    return utils.get_table_fields(request, table_name)

# @login_required
# @user_passes_test(is_admin)
@csrf_exempt
@api_view(['POST'])
def Allotment_Requests(request):    
    return utils.allot(request)    
     

# @api_view(['POST'])
# @permission_classes([AllowAny])
# def google_login(request):
#     token = request.data.get('token')
#     print(request.data)
#     CLIENT_ID = '92731732774-0h1sfmut72l3otkjnptkfvl2a1u5ofre.apps.googleusercontent.com'
#     try:
#         # Specify the CLIENT_ID of the app that accesses the backend:
#         idinfo = id_token.verify_oauth2_token(token, requests.Request(), CLIENT_ID)

#         # ID token is valid. Get the user's Google Account ID from the decoded token.
#         userid = idinfo['sub']

#         # Check if user is admin or student
#         email = idinfo['email']
#         is_admin = email.endswith('@iiitd.ac.in')  # Replace with your own domain
#         if is_admin:
#             # Create or get admin user
#             User = get_user_model()
#             user, created = User.objects.get_or_create(
#                 username=email,
#                 email=email,
#                 is_staff=True,
#                 is_superuser=True,
#             )
#         else:
#             # Create or get student user
#             User = get_user_model()
#             user, created = User.objects.get_or_create(
#                 username=email,
#                 email=email,
#                 is_staff=False,
#                 is_superuser=False,
#             )

#         # Generate token
#         token, created = Token.objects.get_or_create(user=user)

#         return Response({'token': token.key})
#     except ValueError:
#         # Invalid token
#         return Response({'error': 'Invalid token'})