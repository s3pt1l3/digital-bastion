from django.db import models
import uuid


class Article(models.Model):
    article_id = models.UUIDField(default=uuid.uuid4, auto_created=True)
    user_id = models.UUIDField(default=uuid.uuid4)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
