from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Subscription(models.Model):
	subscriber = models.ForeignKey(User, on_delete=models.CASCADE)
	subscribed_to = models.ForeignKey('courses.Course', on_delete=models.CASCADE)

	def __str__(self):
		return f"{self.subscriber.username} is subscribed to {self.subscribed_to.code}"
	
	class Meta:
		constraints = [
			models.UniqueConstraint(fields=['subscriber', 'subscribed_to'], name="unqiue_subscription")
		]