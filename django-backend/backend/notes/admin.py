from django.contrib import admin
from .models import Note

# Register your models here.
class NoteAdmin(admin.ModelAdmin):
	list_display = ('id', 'author', 'course', 'instructor', 'lectureNum', 'notes')

admin.site.register(Note, NoteAdmin)