# Generated by Django 5.1 on 2024-10-31 23:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0003_note_owner'),
    ]

    operations = [
        migrations.RenameField(
            model_name='note',
            old_name='owner',
            new_name='author',
        ),
    ]
