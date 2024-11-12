# from .models import Student
from django.contrib.auth.models import User
from notes.models import Note
from rest_framework import serializers

class StudentSerializer(serializers.ModelSerializer):
	# TODO: get this data
	# written_notes = serializers.PrimaryKeyRelatedField(many=True, queryset=Note.objects.all())
	# TODO: look into https://www.django-rest-framework.org/api-guide/relations/ for better ways to serialize this relationship.

	class Meta:
		model = User
		fields = ['id', 'username']