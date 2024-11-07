from django.contrib import admin
from .models import Subscription

# Register your models here.
class SubscriptionAdmin(admin.ModelAdmin):
	pass

admin.site.register(Subscription, SubscriptionAdmin)