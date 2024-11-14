from rest_framework import viewsets, permissions
from notes.permissions import IsOwnerOrReadOnly
from .serializers  import NoteSerializer
from .models import Note

class NoteViewSet(viewsets.ModelViewSet):
	# permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
	permission_classes = []
	authentication_classes = []
	serializer_class = NoteSerializer
	queryset = Note.objects.all().order_by('-id')

	# def perform_create(self, serializer):
	# 	# Can POST with just basic django user. this might be the right way to do it.
	# 	serializer.save(author=self.request.user)
