from django.contrib.auth import get_user_model
from django.test import TestCase
from rest_framework.test import APIClient
from .models import Post

# Create your tests here.

User = get_user_model()
class PostTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='basma', password='123456')
        self.user1 = User.objects.create_user(username='basma96', password='123456789')
        Post.objects.create(content='Hello from diaries', user=self.user)
        Post.objects.create(content='Hello from diaries', user=self.user)
        Post.objects.create(content='Hello from diaries', user=self.user1)
        self.currentCount = Post.objects.all().count()

    def test_created_post(self):
        post = Post.objects.create(content='Hello diaries', user=self.user)
        self.assertEqual(post.id, 4)
        self.assertEqual(post.user, self.user)

    def get_client(self):
        client = APIClient()
        client.login(username=self.user.username, password='123456')
        return client

    def test_post_list(self):
        client = self.get_client()
        response = client.get('/api/posts/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 3)

    def test_like_action(self):
        client = self.get_client()
        response = client.post('/api/posts/action/', {'id': 1, 'action': 'like'})
        like_count = response.json().get('likes')
        user = self.user
        my_like_instances_count = user.postlike_set.count()
        my_related_likes = user.post_user.count()
        self.assertEqual(response.status_code, 200)
        self.assertEqual(like_count, 1)
        self.assertEqual(my_like_instances_count, 1)
        self.assertEqual(my_like_instances_count, my_related_likes)

    def test_unlike_action(self):
        client = self.get_client()
        response = client.post('/api/posts/action/', 
            {'id': 2, 'action': 'like'})
        self.assertEqual(response.status_code, 200)
        response = client.post('/api/posts/action/', 
            {'id': 2, 'action': 'unlike'})
        self.assertEqual(response.status_code, 200)
        like_count = response.json().get('likes')
        self.assertEqual(like_count, 0)

    def test_post_create_api_view(self):
        request_data = {'content': 'This is my test post'}
        client = self.get_client()
        response = client.post('/api/posts/create/', request_data)
        self.assertEqual(response.status_code, 201)
        response_data = response.json()
        new_post_id = response_data.get('id')
        self.assertEqual(self.currentCount + 1, new_post_id)

    def test_post_detail_api_view(self):
        client = self.get_client()
        response = client.get('/api/posts/1/')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        _id = data.get('id')
        self.assertEqual(_id, 1)

    def test_post_detail_api_view(self):
        client = self.get_client()
        response = client.delete('/api/posts/1/delete/')
        self.assertEqual(response.status_code, 200)
        client = self.get_client()
        response = client.delete('/api/posts/1/delete/')
        self.assertEqual(response.status_code, 404)
        response_incorrect_owner = client.delete('/api/posts/3/delete/')
        self.assertEqual(response_incorrect_owner.status_code, 401)

    