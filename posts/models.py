from django.db import models
from django.db.models import Q
from django.contrib.auth import get_user_model
import random
# Create your models here.

class PostLike(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    post = models.ForeignKey('Post', on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

class PostQuerySet(models.QuerySet):
    def by_username(self, username):
        return self.filter(user__username__iexact=username)

    def feed(self, user):
        profiles_exist = user.following.exists()
        followed_users_id = []
        if profiles_exist:
            followed_users_id = user.following.values_list('user__id', flat =True)
        return self.filter(Q(user__id__in=followed_users_id)|Q(user=user)).distinct().order_by('-timestamp')

class PostManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return PostQuerySet(self.model, using=self._db)

    def feed(self, user):
        return self.get_queryset().feed(user)

class Post(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='posts')
    likes = models.ManyToManyField(get_user_model(), related_name='post_user', blank=True, through=PostLike)
    content = models.TextField(blank=True, null=True)
    image = models.FileField(upload_to='images/', blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    objects = PostManager()
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