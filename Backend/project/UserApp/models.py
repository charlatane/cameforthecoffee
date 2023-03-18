from django.db import models

# Create your models here.

class UserModel(models.Model):
   first_name = models.TextField()
   last_name = models.TextField()
   username = models.TextField(primary_key=True)
   password = models.TextField()
   email = models.TextField()
