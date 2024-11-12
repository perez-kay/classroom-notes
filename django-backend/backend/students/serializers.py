from .models import Student
from notes.models import Note
from rest_framework import serializers

class StudentSerializer(serializers.ModelSerializer):
	written_notes = serializers.PrimaryKeyRelatedField(many=True, queryset=Note.objects.all())
	# TODO: look into https://www.django-rest-framework.org/api-guide/relations/ for better ways to serialize this relationship.

	class Meta:
		model = Student
		# TODO: figure out whatr the user.username field would be represented as, as user returns the id number and user.username doesn't work.
		fields = ['id', 'user', 'written_notes']