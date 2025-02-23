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
from rest_framework.pagination import PageNumberPagination
from django.core.mail import send_mail
from .forms import EmailForms
from django.core.mail import send_mail







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
            
@api_view(['GET'])
def search(request,title):
    try:
        property=models.Property.objects.filter(title=title)
        serializer=serializers.PropertySerializer(property,many=True)
        return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
    except Exception as e:
        return Response(str(e))

@api_view(['POST'])
def create_post(request):
    serializers= serializers.PostSerializers(data=request.data) 
    if serializers.is_valid():
        serializers.save()
        return Response(serializers.data)
    return Response(serializers.errors)  


@api_view(['GET'])
def post_list(request):
    page_number = int(request.GET.get('page', 1))
    page_size = int(request.GET.get('page_size', 5))
    posts = models.Post.published.all()
    
    if not posts:  
        return Response({"detail": "No posts found"}, status=204)
    
    paginator = PageNumberPagination()
    paginator.page=page_number
    paginator.page_size = page_size
    pagianted_post = paginator.paginate_queryset(posts, request)
    serializer = serializers.PostSerializers(pagianted_post, many=True)
    return paginator.get_paginated_response(serializer.data)

@api_view(['GET'])
def post_Draft(request):
   
    posts = models.Post.objects.filter(status="DF")
    
    if not posts:  
        return Response({"detail": "No posts found"}, status=204)

   
    serializer = serializers.PostSerializers(posts, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def post_share(request, post_id):
    print(post_id)
    try:
        print("ya sammma pni aayo")
        post = get_object_or_404(models.Post, id=post_id)
        
       
        form = EmailForms(request.data)
        
        
        if form.is_valid():
           
            cd = form.cleaned_data
            subject = f"Check out this blog post: {post.title}"
            message = f"Hi,\n\nI wanted to share this blog post with you:\n\nTitle: {post.title}\n\n{post.body}\n\nCheck it out!"
            from_email =cd['email'] #settings.DEFAULT_FROM_EMAIL  
            to_email = cd['to']  
            
            # Send the email
            send_mail(subject, message, from_email, [to_email])

            return Response({"detail": "Post shared successfully!"}, status=200)
        else:
            return Response({"detail": "Invalid form data."}, status=400)
    
    except Exception as e:
        # Handle any errors
        print("hello error ya aayo")
        return Response({"detail": str(e)}, status=500)