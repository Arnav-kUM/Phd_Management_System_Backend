from django.shortcuts import render
from django.http import JsonResponse

data = [
    {
        "firstName": "John ",
        "lastName": "Doe",
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
    },
]

def index(request):
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
