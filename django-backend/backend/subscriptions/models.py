from django.db import models

# Create your models here.
class Subscription(models.Model):
	subscribed_to = models.ForeignKey('courses.Course', on_delete=models.CASCADE)
	subscriber = models.ForeignKey('students.Student', on_delete=models.CASCADE)

	def __str__(self):
		return f"{self.subscriber.user.username} is subscribed to {self.subscribed_to.code}"
	
	class Meta:
		constraints = [
			models.UniqueConstraint(fields=['subscribed_to', 'subscriber'], name="unqiue_subscription")
		]