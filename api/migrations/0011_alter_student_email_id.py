# Generated by Django 4.1.7 on 2023-04-15 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_rename_instructor_id_advisor_instructor_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='Email_Id',
            field=models.EmailField(max_length=255, unique=True),
        ),
    ]
