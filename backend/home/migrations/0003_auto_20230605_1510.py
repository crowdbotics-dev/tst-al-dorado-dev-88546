# Generated by Django 2.2.28 on 2023-06-05 15:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_monster'),
    ]

    operations = [
        migrations.AlterField(
            model_name='monster',
            name='kgf',
            field=models.TextField(),
        ),
    ]
