from . import serializers
from . import models
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.decorators import api_view,permission_classes





class login(TokenObtainPairView):
    def post(self,request,*args,**kwargs):
        username=request.data.get('username')
        password=request.data.get('password')
        if not username or not password :
           raise AuthenticationFailed("username and password are required")
        user=authenticate(username=username,password=password)
        
        if user is None:
            raise AuthenticationFailed("Invalid Credentials")
        
        serializer=serializers.UserLoginSerializer(user)
        response=super().post(request,*args,**kwargs)
        
        tokens=response.data
        access_tokens=tokens['access']
        refresh_tokens=tokens['refresh']
        
        return Response({
            'success': True,
            'access_token': access_tokens,
            'refresh_token': refresh_tokens,
            'username': user.username,  
        }, status=status.HTTP_200_OK)
    

@api_view(['POST'])
def register(request):
    serializer=serializers.RegisterUserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response({"error":"Not Valid Regsiter"})

class List_all(APIView):
    def get(self,request):
        try:
            property=models.Property.objects.all()
            serializer=serializers.PropertySerializer(property,many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"not found":"cannot get all the list",
                             "error":str(e)},status=status.HTTP_404_NOT_FOUND)


class List_specific(APIView):

    def get(self,request,id):
        try:
            property=get_object_or_404(models.Property,id=id)
            serializer=serializers.PropertySerializer(property)
            return Response(serializer.data,status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"not found":"cannot get all the list",
                             "error":str(e)},status=status.HTTP_404_NOT_FOUND)
            
    @permission_classes([IsAuthenticated])       
    def post(self,request):
        try:
            serializer=serializers.PropertySerializer(data=request.data,context={'request': request})
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response(
            {"error": "Validation failed", "details": serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )
        except Exception as e:
            return Response({"not post":"cannot post the list",
                             "error":str(e)},status=status.HTTP_404_NOT_FOUND)