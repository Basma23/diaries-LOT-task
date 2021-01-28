from django.conf import settings
from rest_framework import serializers
from profiles.serializers import PublicProfileSerializer
from .models import Post

MAX_POST_LENGTH = settings.MAX_POST_LENGTH
POST_ACTION_OPTIONS = settings.POST_ACTION_OPTIONS

class PostActionSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    action = serializers.CharField()
    def validate_action(self, value):
        value = value.lower().strip() 
        if not value in POST_ACTION_OPTIONS:
            raise serializers.ValidationError('This is not a valid action for posts')
        return value

class PostCreateSerializer(serializers.ModelSerializer):
    user = PublicProfileSerializer(source='user.profile', read_only=True)
    likes = serializers.SerializerMethodField(read_only=True)
    class Meta: 
        model = Post
        fields = ['id', 'user', 'timestamp', 'content', 'likes']

    def get_likes(self, obj):
        return obj.likes.count()

    # def get_user(self, obj):
    #     return obj.user.id

class PostSerializer(serializers.ModelSerializer):
    user = PublicProfileSerializer(source='user.profile', read_only=True)
    likes = serializers.SerializerMethodField(read_only=True)
    class Meta: 
        model = Post
        fields = ['id', 'user', 'timestamp', 'content', 'likes']

    def get_likes(self, obj):
        return obj.likes.count()
