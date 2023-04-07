from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
import mysql.connector as sql
from django.views.decorators.csrf import csrf_exempt
from django.middleware.csrf import get_token


m = sql.connect(host ='b0c783cnekofyeuexwed-mysql.services.clever-cloud.com',
                port = "3306",
                user = 'unvtmxk05eogufwf',
                password = 'C1QI1IseSqo6izA8riZb',
                database = 'b0c783cnekofyeuexwed')
cursor = m.cursor()
query = "select student_name, gender from student"
cursor.execute(query)
data = []
for i in cursor:
    y = {}
    y["firstName"] = i[0]
    y["lastName"] = i[1]
    data.append(y)


# data = [
#     {
#         "firstName": "John ",
#         "lastName": "Doe",
#     },
#     {
#         "firstName": "Jane",
#         "lastName": "Doe",
#     },
# ]
# @csrf_exempt
def index(request):
    filtered_data = [{"firstName": d["firstName"], "lastName": d["lastName"]} for d in data]

    # print('Hello',request.build_absolute_uri())
    return JsonResponse(filtered_data, safe = False)

# def add_user(request):
#     if request.method == "POST":
#         # Assuming the input fields have names "firstName" and "lastName"
#         new_data = {
#             "firstName": request.POST.get("firstName"),
#             "lastName": request.POST.get("lastName"),
#         }
#         print(new_data)
#         data.append(new_data)
#     return JsonResponse(data, safe=False)

# def my_endpoint(request):
#     query_param = request.GET.get('yourQueryParam')
#     # Process the query parameter as needed
#     response_data = {'message': f'The query parameter value is {query_param}'}
#     return JsonResponse(response_data)

def csrf_token(request):

            
    token = get_token(request)
    return JsonResponse({'csrfToken': token})

@csrf_exempt
def parameter(request):
    if request.method == 'OPTIONS':
        response = HttpResponse()
        response['Access-Control-Allow-Origin'] = 'http://127.0.0.1:5173'
        response['Access-Control-Allow-Methods'] = 'POST'
        response['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
        return response
    elif request.method == 'POST':
        your_query_param = request.POST.get('yourQueryParam', None)
        # Handle the actual CORS request here
        return HttpResponse('Success')
    return HttpResponse("Hi")