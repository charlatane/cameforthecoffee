from django.db import models
import jsonfield

# Create your models here.

class ResumeModel(models.Model):
   resumeid = models.AutoField(primary_key=True)
   username = models.TextField()
   name = models.TextField()
   gender = models.TextField()
   phone = models.TextField()
   email = models.TextField()
   address = models.TextField()
   education = models.TextField()
   skills = models.TextField()
   achievements = models.TextField()
   experience = models.TextField()
   activities = models.TextField()

class SaveModel(models.Model):
   workid = models.AutoField(primary_key=True)
   resumeid = models.IntegerField()
   username = models.TextField()
   name = models.TextField()
   gender = models.TextField()
   phone = models.TextField()
   email = models.TextField()
   address = models.TextField()
   education = models.TextField()
   skills = models.TextField()
   achievements = models.TextField()
   experience = models.TextField()
   activities = models.TextField()
   templateid = models.IntegerField()
