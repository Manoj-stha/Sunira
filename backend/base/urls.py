from django.urls import path
from .views import List_specific,List_all,login,register,search,post_list, create_post,post_Draft,post_share


urlpatterns = [
    path('login/',login.as_view(),name="Login"),
    path('register/',register,name="Register"),
    path('list/properties/all/',List_all.as_view(),name="list-property-all"),
    path('list/properties/<int:id>/', List_specific.as_view(), name='property-list-specific'),
    path('create/properties/', List_specific.as_view(), name='property-create'),
    path('search/properties/<str:title>/', search, name='property-search'),
    
    
    #blogs
    path('posts/', post_list, name='post_list'),  
    path('create/', create_post, name='create_post_list'),  
    path('drafts/', post_Draft, name='post_draft'), 
    path('posts/share/<int:post_id>/', post_share, name='post_share'),

]
