from django.db import models

# Create your models here.
class AccountTypeModel(models.Model):
   UserID = models.IntegerField(primary_key=True)
   AccountType = models.TextField()
   