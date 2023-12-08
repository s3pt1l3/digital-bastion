from django.contrib import admin
from django.urls import path, include, re_path
from articles.views import articles_list, aticle_get, article_post
from accounts.views import register_user, user_login, user_logout

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('api/articles/<int:page>', articles_list),
    path('api/article/<uuid:id>', aticle_get),
    path('api/article/create', article_post),
    
    path('api/register/', register_user, name='register'),
    path('api/login/', user_login, name='login'),
    path('api/logout/', user_logout, name='logout'),
]
