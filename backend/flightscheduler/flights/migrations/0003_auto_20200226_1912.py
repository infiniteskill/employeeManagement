# Generated by Django 3.0 on 2020-02-26 19:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flights', '0002_auto_20200226_0657'),
    ]

    operations = [
        migrations.AlterField(
            model_name='department',
            name='DepartmentID',
            field=models.IntegerField(auto_created=True),
        ),
    ]
