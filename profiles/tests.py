from django.test import TestCase
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient
from .models import Profile

# Create your tests here.

User = get_user_model()

class ProfileTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='basma', password='123456')
        self.user1 = User.objects.create_user(username='basma96', password='123456789')
    
    def get_client(self):
        client = APIClient()
        client.login(username=self.user.username, password='123456')
        return client

    def test_profile_created_via_signal(self):
        querySet = Profile.objects.all()
        self.assertEqual(querySet.count(), 2)
    
    def test_following(self):
        first = self.user
        second = self.user1
        first.profile.followers.add(second) 
        second_user_following_whom = second.following.all()
        querySet = second_user_following_whom.filter(user=first) 
        first_user_following_no_one = first.following.all() 
        self.assertTrue(querySet.exists())
        self.assertFalse(first_user_following_no_one.exists())

    def test_follow_api_endpoint(self):
        client = self.get_client()
        response = client.post(
            f"/api/profiles/{self.user1.username}/follow",
            {"action": "follow"}
        )
        r_data = response.json()
        count = r_data.get("count")
        self.assertEqual(count, 1)
    
    def test_unfollow_api_endpoint(self):
        first = self.user
        second = self.user1
        first.profile.followers.add(second)
        client = self.get_client()
        response = client.post(
            f"/api/profiles/{self.user1.username}/follow",
            {"action": "unfollow"}
        )
        r_data = response.json()
        count = r_data.get("count")
        self.assertEqual(count, 0)
    
    def test_cannot_follow_api_endpoint(self):
        client = self.get_client()
        response = client.post(
            f"/api/profiles/{self.user.username}/follow",
            {"action": "follow"}
        )
        r_data = response.json()
        count = r_data.get("count")
        self.assertEqual(count, 0)