from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator, MaxValueValidator


class User(AbstractUser):
    is_agent=models.BooleanField(default=False)
    is_buyer=models.BooleanField(default=False)
    
class Property_Type(models.Model):
    name= models.CharField(max_length=250,unique=True)
  
    def __str__(self):
        return self.name
    
class Address(models.Model):
    provience=models.IntegerField(validators=[
        MinValueValidator(1),
        MaxValueValidator(7)
    ])
    district=models.CharField(max_length=100)
    city=models.CharField(max_length=100)
    street=models.CharField(max_length=100)
    
    def __str__(self):
        return f"{self.provience} {self.district} {self.city} {self.street}"
    