from django.db import models

# Create your models here.
class Note(models.Model):
	COURSE_CHOICES = {
		"CSE123" : "CSE123: Programming Fundamentals I ",
		"CSE124" : "CSE124: Programming Fundamentals II",
		"MATH307": "MATH307: Differential Equations",
		"MATH308": "MATH308: Linear Algebra",
		"ENGL204": "ENGL204: Popular Fiction and Media" 

	}
	course = models.CharField(choices=COURSE_CHOICES, max_length=35)
	instructor = models.CharField(max_length=30)
	lectureNum = models.IntegerField() 
	notes = models.TextField()