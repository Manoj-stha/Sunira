from django.urls import path
from .views import List_specific,List_all,login,register

urlpatterns = [
    path('login/',login.as_view(),name="Login"),
    path('register/',register,name="Register"),
    path('list/properties/all/',List_all.as_view(),name="list-property-all"),
    path('list/properties/<int:id>/', List_specific.as_view(), name='property-list-specific'),
    path('create/properties/', List_specific.as_view(), name='property-create'),

]
