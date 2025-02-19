from django.contrib import admin
from .models import Property

class PropertyAdmin(admin.ModelAdmin):
    list_display = ('title', 'agent', 'price', 'is_available', 'created_at')
    
    search_fields = ('title', 'agent__username')
    
    list_filter = ('is_available', 'price')
    
    list_filter = ('created_at',)
    
    ordering = ('-created_at',)
    
    fields = ('title', 'description', 'price', 'agent', 'is_available', 'bedroom', 'bathroom', 'address')
    
    readonly_fields = ('created_at',)

admin.site.register(Property, PropertyAdmin)
