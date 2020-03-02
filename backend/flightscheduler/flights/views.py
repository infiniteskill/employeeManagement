from django.http import HttpResponse

import json
from flights.models import  Department,Employee
from flights.serializers import ScheduleSerializer, EmployeeSerializer

from rest_framework import viewsets,status


from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse


from django.views.decorators.csrf import  csrf_exempt







@csrf_exempt
def dep_list(request):
    if request.method=='GET':
    
        schedules=Department.objects.all().values('DepartmentName')
        schedules_serializer=ScheduleSerializer(schedules,many=True)
        
        return JsonResponse(schedules_serializer.data,safe=False)
        


@csrf_exempt
def flight_list(request):
    if request.method=='GET':

        schedules=Department.objects.all()
        schedules_serializer=ScheduleSerializer(schedules,many=True)
        return JsonResponse(schedules_serializer.data,safe=False)

    if request.method=='POST':

        schedule_data=JSONParser().parse(request)
        schedule_serializer=ScheduleSerializer(data=schedule_data)

        if schedule_serializer.is_valid():
            schedule_serializer.save()
            return JsonResponse(schedule_serializer.data,status=status.HTTP_201_CREATED)

        return JsonResponse(schedule_serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    
@csrf_exempt
def delDep(request,pk):
    if request.method=='DELETE':
        try:
            schedule=Department.objects.get(pk=pk)
            schedule.delete()
            return HttpResponse("Deleted",status=status.HTTP_204_NO_CONTENT)

        except Exception as e:

            return HttpResponse(e,status=status.HTTP_404_NOT_FOUND)


    if request.method=='PUT':
            
            schedule=Department.objects.get(pk=pk)
            schedule_data=JSONParser().parse(request)

            schedule_serializer=ScheduleSerializer(schedule,data=schedule_data)

            if schedule_serializer.is_valid():
                schedule_serializer.save()

                return JsonResponse(schedule_serializer.data)

            return JsonResponse(schedule_serializer.errors,status=status.HTTP_400_BAD_REQUEST)







@csrf_exempt
def emp_list(request):
    if request.method=='GET':

        schedules=Employee.objects.all()
        schedules_serializer=EmployeeSerializer(schedules,many=True)
        return JsonResponse(schedules_serializer.data,safe=False)

    if request.method=='POST':
        
       
        schedule_data=JSONParser().parse(request)
        schedule_serializer=EmployeeSerializer(data=schedule_data)

        if schedule_serializer.is_valid():
            schedule_serializer.save()
            return JsonResponse(schedule_serializer.data,status=status.HTTP_201_CREATED)

        return JsonResponse(schedule_serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    
@csrf_exempt
def del_emp(request,pk):
    if request.method=='DELETE':
        try:
            schedule=Employee.objects.get(pk=pk)
            schedule.delete()
            return HttpResponse("Deleted",status=status.HTTP_204_NO_CONTENT)

        except Exception as e:

            return HttpResponse(e,status=status.HTTP_404_NOT_FOUND)


    if request.method=='PUT':
            
            schedule=Employee.objects.get(pk=pk)
            schedule_data=JSONParser().parse(request)

            schedule_serializer=EmployeeSerializer(schedule,data=schedule_data)

            if schedule_serializer.is_valid():
                schedule_serializer.save()

                return JsonResponse(schedule_serializer.data)

            return JsonResponse(schedule_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
