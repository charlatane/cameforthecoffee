from django.db import models

# Create your models here.

class TempModel(models.Model):
    TempID = models.IntegerField(primary_key=True)
    TempName = models.TextField()
