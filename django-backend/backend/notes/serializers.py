from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note

class NoteSerializer(serializers.ModelSerializer):
	author = serializers.ReadOnlyField(source='author.username')
	class Meta:
		model = Note
		fields = ['id', 'author', 'course', 'description', 'title']
