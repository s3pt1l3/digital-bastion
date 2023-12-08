from django.contrib import admin
from django.urls import path, include
from articles.views import articles_list, aticle_get, article_post

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/articles/<int:page>', articles_list),
    path('api/article/<uuid:id>', aticle_get),
    path('api/article/create', article_post),
]
