# Generated by Django 4.1.7 on 2023-04-17 21:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_alter_student_department'),
    ]

    operations = [
        migrations.AlterField(
            model_name='instructor',
            name='Department',
            field=models.CharField(choices=[('CSE', 'CSE'), ('CB', 'CB'), ('ECE', 'ECE'), ('HCD', 'HCD'), ('SSH', 'SSH'), ('Maths', 'Maths')], default='CSE', max_length=255),
            preserve_default=False,
        ),
    ]