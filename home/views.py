from django.shortcuts import render
from django.http import JsonResponse
import mysql.connector as sql


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

def index(request):
    # x = request.
    filtered_data = [{"firstName": d["firstName"], "lastName": d["lastName"]} for d in data]
    return JsonResponse(filtered_data, safe=False)

def add_user(request):
    if request.method == "POST":
        # Assuming the input fields have names "firstName" and "lastName"
        new_data = {
            "firstName": request.POST.get("firstName"),
            "lastName": request.POST.get("lastName"),
        }
        print(new_data)
        data.append(new_data)
    return JsonResponse(data, safe=False)



