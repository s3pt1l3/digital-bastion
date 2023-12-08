from django.shortcuts import render
from django.http import JsonResponse
from .models import Article
from hackfsp.serializers import ArticleSerializer
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from django.core.paginator import Paginator


""" Articles """

@api_view(['GET'])
def articles_list(request, page: int):
    if request.method == 'GET':
        articles = Article.objects.all().order_by('-created_at')
        p = Paginator(articles, 20)
        try:
            res = p.page(page)
            serializer = ArticleSerializer(res, many=True)
            return JsonResponse(serializer.data, safe=False)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def aticle_get(request, id):
    try:
        article = Article.objects.get(article_id=id)
    except Article.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = ArticleSerializer(article)
        return Response(serializer.data)


@api_view(['POST'])
def article_post(request):
    if request.method == 'POST':
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        