from . import serializers
from . import models
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404



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
    def get(self,id,request):
        try:
            property=get_object_or_404(property,id=id)
            serializer=serializers.PropertySerializer(property)
            return Response(serializer.data,status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"not found":"cannot get all the list",
                             "error":str(e)},status=status.HTTP_404_NOT_FOUND)