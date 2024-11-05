from django.db import models

# Create your models here.
class Course(models.Model):
	code = models.CharField(max_length=7, primary_key=True)
	title = models.CharField(max_length=50)
	description = models.TextField()

	def __str__(self):
		return self.code