# Generated by Django 5.1 on 2024-11-14 21:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0003_alter_note_author'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='note',
            name='author',
        ),
    ]
