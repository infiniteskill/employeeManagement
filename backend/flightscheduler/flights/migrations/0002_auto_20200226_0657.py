# Generated by Django 3.0 on 2020-02-26 06:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flights', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('DepartmentID', models.CharField(max_length=5)),
                ('DepartmentName', models.CharField(max_length=20)),
            ],
        ),
        migrations.DeleteModel(
            name='Schedule',
        ),
    ]
