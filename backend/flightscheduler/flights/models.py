from django.db import models

# Create your models here.


class Department(models.Model):
    DepartmentID=models.AutoField(primary_key=True)
    DepartmentName=models.CharField(max_length=20)


    def __str__(self):
        return self.DepartmentName  +"  "+str(self.DepartmentID)



class Employee(models.Model):
    Department=models.CharField(max_length=20)


    EmployeeName=models.CharField(max_length=10)
    EmployeeID=models.AutoField(primary_key=True)
    MailID=models.CharField(max_length=20)
    DOJ=models.CharField(max_length=100)


    def __str__(self):
        return self.EmployeeName  +"  "+str(self.Department)



