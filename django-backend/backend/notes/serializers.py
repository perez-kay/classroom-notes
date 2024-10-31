from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note

class NoteSerializer(serializers.ModelSerializer):
	class Meta:
		model = Note
		fields = ('id', 'course', 'instructor', 'lecturenum', 'notes')

class UserSerializer(serializers.ModelSerializer):
	notes = serializers.PrimaryKeyRelatedField(many=True, queryset=Note.objects.all())

	class Meta:
		model = User
		fields = ['id', 'username', 'notes']