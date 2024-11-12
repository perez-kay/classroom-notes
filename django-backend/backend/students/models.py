from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Student(models.Model):
	user = models.OneToOneField(
		User,
		on_delete=models.CASCADE,
		
	)
	major = models.CharField(max_length=30)
	minor = models.CharField(max_length=30, blank=True)
	# profile_picture = ImageField(upload_to='profiles', default='profiles/default_pfp/default.jpg',null=False)
	# banner = ImageField(upload_to='banners', default='banners/default/default.jpg')
	# bio = models.CharField(default='', max_length=140)

	def __str__(self):
		return self.user.username
	
# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
# 	"""Create a new Student() object when a Django User is created."""
# 	if created:
# 		Student.objects.create(user=instance)