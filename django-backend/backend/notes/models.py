from django.db import models
# from students.models import Student
# from courses.models import Course

# Create your models here.
class Note(models.Model):
	# COURSE_CHOICES = {
	# 	"CSE123" : "CSE123: Programming Fundamentals I ",
	# 	"CSE124" : "CSE124: Programming Fundamentals II",
	# 	"MATH307": "MATH307: Differential Equations",
	# 	"MATH308": "MATH308: Linear Algebra",
	# 	"ENGL204": "ENGL204: Popular Fiction and Media" 

	# }
	# course = models.CharField(choices=COURSE_CHOICES, max_length=35)
	# instructor = models.CharField(max_length=30)
	title = models.CharField(max_length=50) 
	description = models.TextField()
	# file = models.FileField()
	# author = models.ForeignKey("students.Student", on_delete=models.CASCADE, related_name='written_notes')
	author = models.ForeignKey("auth.User", on_delete=models.CASCADE)
	course = models.ForeignKey("courses.Course", on_delete=models.CASCADE)

	def __str__(self):
		return f"{self.title} by {self.author.username}"