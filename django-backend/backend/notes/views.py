from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from notes.permissions import IsOwnerOrReadOnly
# from .serializers  import NoteSerializer, UserSerializer
from .models import Note

# class NoteViewSet(viewsets.ModelViewSet):
# 	permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
# 	serializer_class = NoteSerializer
# 	queryset = Note.objects.all()

# 	def perform_create(self, serializer):
# 		serializer.save(author=self.request.user)

# class UserViewSet(viewsets.ReadOnlyModelViewSet):
# 	serializer_class = UserSerializer
# 	queryset = User.objects.all()
