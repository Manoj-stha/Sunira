from rest_framework import serializers
from .models import Address, Property_Image, Listing, Property

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
    listing = ListingSerializer(read_only=True)  # If one-to-one, else use many=True
    images = PropertyImageSerializer(many=True, read_only=True)
    user = serializers.StringRelatedField()
    address = AddressSerializer()

    class Meta:
        model = Property
        fields = ['id', 'title', 'description', 'price', 'user', 'address', 'listing', 'images']

    def create(self, validated_data):
        address_data = validated_data.pop('address')  
        address = Address.objects.create(**address_data)  
        property_instance = Property.objects.create(address=address, **validated_data)  
        return property_instance
