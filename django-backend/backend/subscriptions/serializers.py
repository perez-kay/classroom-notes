from rest_framework import serializers
from .models import Subscription


# TODO: create this serializer
class SubscriptionSerializer(serializers.ModelSerializer):
	class Meta:
		model = Subscription
		fields = ['subscriber', 'subscribed_to']