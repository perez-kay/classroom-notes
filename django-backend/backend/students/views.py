from rest_framework import viewsets
# from .models import Student
from django.contrib.auth.models import User
from .serializers import StudentSerializer

class StudentViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = User.objects.all()
	serializer_class = StudentSerializer
