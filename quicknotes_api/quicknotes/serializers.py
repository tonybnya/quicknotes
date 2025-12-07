"""
Script Name : serializers.py
Description : Serialize the model viewsets - convert the model to JSON and vice-versa
Author      : @tonybnya
"""

from rest_framework.serializers import ModelSerializer # type: ignore
from quicknotes.models import Note


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'title', 'content']