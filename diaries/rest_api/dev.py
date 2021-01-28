from django.contrib.auth import get_user_model
from rest_framework import authentication

User = get_user_model()

class DevAuthentication(authentication.BasicAuthentication):
    def authenticate(self, request):
        querySet = User.objects.filter(id=2)
        user = querySet.order_by('?').first()
        return(user, None)