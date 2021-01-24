from django.db import models
from django.contrib.auth import get_user_model
import random
# Create your models here.

class PostLike(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    post = models.ForeignKey('Post', on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

class Post(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    likes = models.ManyToManyField(get_user_model(), related_name='post_user', blank=True, through=PostLike)
    content = models.TextField(blank=True, null=True)
    image = models.FileField(upload_to='images/', blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    # def __str__(self):
    #     return self.content

    class Meta: 
        ordering = ['-id']

    def serialize(self):
        return {
            'id':self.id,
            'content': self.content,
            'likes': random.randint(0, 100)
        }