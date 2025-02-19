from rest_framework import serializers
from .models import Address, Property_Image, Listing, Property,User
from django.contrib.auth import authenticate




class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User  
        fields = ['id','email', 'username', 'password' 'is_agent',  'is_staff']


class UserLoginSerializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True)
    class Meta:
        model=User
        fields=['password','username']
        
    def validate(self,data):
        username=data.get('username')
        password=data.get('password')
        
        if not username or not password:
            raise serializers.ValidationError("username and password are required")
        
        user=authenticate(username=username,password=password)
        
        if user is None:
            raise serializers.ValidationError("Invalid credentails")
        
        data['user']=user
        return data
    
class RegisterUserSerializer(serializers.ModelSerializer):
        password=serializers.CharField(write_only=True)
        class Meta:
            model=User
            fields=['username','email','is_agent','password']
        
        def create(self,validated_data):
            
            user= User(
                username=validated_data['username'],
                email=validated_data['email'],
                is_agent=True                
            )
            user.set_password(validated_data['password'])
            user.save()
            return user

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['id', 'city', 'street', 'district', 'provience']

class PropertyImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Property_Image
        fields = ['id', 'image']

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ['id', 'is_featured', 'is_sold', 'listed_at']

class PropertySerializer(serializers.ModelSerializer):
    listing = ListingSerializer(read_only=True)  
    images = PropertyImageSerializer(many=True, read_only=True)
    address = AddressSerializer()
    

    class Meta:
        model = Property
        fields = ['id', 'title', 'description', 'price', 'address', 'listing', 'images']
        read_only_fields = ['agent']
    def create(self, validated_data):
        address_data = validated_data.pop('address')  
        address = Address.objects.create(**address_data)  
        
        agent = self.context['request'].user
        
        if not agent.is_agent and not agent.is_staff:
            raise serializers.ValidationError("Only agents or staff can create properties.")

        # Assign the owner of the property
        validated_data['agent'] = agent

        
        property_instance = Property.objects.create(address=address, **validated_data)  
        return property_instance
