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
    

class Property(models.Model):
    owner=models.ForeignKey(User,on_delete=models.CASCADE,related_name='properties')
    Property_Type=models.ForeignKey(Property_Type,on_delete=models.SET_NULL,null=True)
    title=models.CharField(max_length=100)
    description=models.TextField()
    price=models.DecimalField(max_digits=20,decimal_places=2)
    sq_feet=models.DecimalField(max_digits=12,decimal_places=2)
    address=models.OneToOneField(Address,on_delete=models.CASCADE)
    is_available=models.BooleanField(default=True)
    bedroom=models.PositiveSmallIntegerField(default=1)
    bathroom=models.PositiveSmallIntegerField(default=1)
    created_at=models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
    
class Listing(models.Model):
    property=models.OneToOneField(Property, on_delete=models.CASCADE) 
    listed_at=models.DateTimeField(auto_now_add=True)
    is_sold=models.BooleanField(default=False)
    is_feateured=models.BooleanField(default=False)
    
    def __str__(self):
        return f"Listing for {self.Property.title}"
    
class Property_Image(models.Model):
    property=models.ForeignKey(Property,on_delete=models.CASCADE,related_name="images")
    image=models.ImageField(upload_to="property_images/")