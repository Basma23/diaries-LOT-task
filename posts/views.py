from django.conf import settings
from django.http import HttpResponse, Http404, JsonResponse
from django.shortcuts import render, redirect
from django.utils.http import is_safe_url
from posts.models import Post
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .forms import PostForm
from .serializers import PostSerializer, PostActionSerializer
import random
# Create your views here.

ALLOWED_HOSTS = settings.ALLOWED_HOSTS

def home_view(request, *args, **kwargs):
    return render(request, 'pages/home.html', context={}, status=200)

@api_view(['POST'])
# @authentication_classes([SessionAuthentication, MyCustomAuth])
@permission_classes([IsAuthenticated])
def post_create_view(request, *args, **kwargs):
    serializer = PostSerializer(data=request.POST)
    if serializer.is_valid(raise_exception=True):
       serializer.save(user=request.user)
       return Response(serializer.data, status=201)
    return Response({}, status=400)

@api_view(['GET'])
def post_detail_view(request, post_id, *args, **kwargs):
    querySet = Post.objects.filter(id=post_id)
    if not querySet.exists():
        return Response({}, status=404)
    obj = querySet.first()
    serializer = PostSerializer(obj)
    return Response(serializer.data, status=200)

@api_view(['DELETE', 'POST'])
@permission_classes([IsAuthenticated])
def post_delete_view(request, post_id, *args, **kwargs):
    querySet = Post.objects.filter(id=post_id)
    if not querySet.exists():
        return Response({}, status=404)
    querySet = querySet.filter(user=request.user)
    if not querySet.exists():
        return Response({'message': 'You can\'t delete this post'}, status=401)
    obj = querySet.first()
    obj.delete()
    return Response({'message': 'The post deleted'}, status=200)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def post_action_view(request, *args, **kwargs):
    '''
    ID IS REQUIRED TO DO
    LIKE, UNLIKE, REPOST
    '''
    serializer = PostActionSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        data = serializer.validated_data
        post_id = data.get('id')
        action = data.get('action')
        querySet = Post.objects.filter(id=post_id)
        if not querySet.exists():
            return Response({}, status=404)
        obj = querySet.first()
        if action == 'like':
            obj.likes.add(request.user)
            serializer = PostSerializer(obj)
            return Response(serializer.data, status=200)
        elif action == 'unlike':
            obj.likes.remove(request.user)
            serializer = PostSerializer(obj)
            return Response(serializer.data, status=200)
    return Response({}, status=200)

@api_view(['GET'])
def post_list_view(request, *args, **kwargs):
    querySet = Post.objects.all()
    serializer = PostSerializer(querySet, many=True)
    return Response(serializer.data, status=200)

def post_create_view_pure_django(request, *args, **kwargs):
    '''
    REST API CREATE VIEW BY REST DJANGO FRAMEWORK
    '''
    user = request.user
    if not request.user.is_authenticated:
        user = None
        if request.is_ajax():
            return JsonResponse({}, status=401)
        return redirect(settings.LOGIN_URL)
    form = PostForm(request.POST or None)
    next_url = request.POST.get('next') or None
    if form.is_valid():
        obj = form.save(commit=False)
        obj.user = user
        obj.save()
        if request.is_ajax():
            return JsonResponse(obj.serialize(), status=201)
        if next_url != None and is_safe_url(next_url, ALLOWED_HOSTS):
            return redirect(next_url)
        form = PostForm()
    if form.errors:
        if request.is_ajax():
            return JsonResponse(form.errors, status=400)
    return render(request, 'components/form.html', context={'form': form})

def post_list_view_pure_django(request, *args, **kwargs):
    '''
    RESET API VIEW && RETURN JSON DATA
    '''
    querySet = Post.objects.all()
    posts_list = [i.serialize() for i in querySet]
    data = {
        'isUser': False, 
        'response': posts_list
    }
    return JsonResponse(data)

def post_detail_view_pure_django(request, post_id, *args, **kwargs):
    '''
    RESET API VIEW && RETURN JSON DATA
    '''
    data = {
        'id': post_id,
    }
    status = 200
    try:
        obj = Post.objects.get(id=post_id)
        data['content'] = obj.content
    except:
        data['message'] = 'Not found'
        status = 404
    return JsonResponse(data, status=status)