"""
Script Name : models.py
Description : Definition of the models
Author      : @tonybnya
"""

from django.db import models # type: ignore
from django.contrib.auth.models import User


class Collection(models.Model):
    name = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="collections", null=False)

    def __str__(self) -> str:
        return self.name

    def __repr__(self) -> str:
        return self.__str__()


class Note(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()

    collection = models.ForeignKey(Collection, on_delete=models.CASCADE, related_name="notes", null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="Notes", null=False)

    def __str__(self) -> str:
        return self.title

    def __repr__(self) -> str:
        return self.__str__()
