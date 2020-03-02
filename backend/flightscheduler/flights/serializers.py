
from rest_framework import serializers


from flights.models import Department, Employee





class ScheduleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Department

        fields = (
            'DepartmentID',
           'DepartmentName',

        )


class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Employee

        fields = (
            'EmployeeID',
           'EmployeeName',
           'Department',
           'MailID',
           'DOJ'

        )

