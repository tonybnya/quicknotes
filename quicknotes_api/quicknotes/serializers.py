"""
Script Name : serializers.py
Description : Serialize the model viewsets
Author      : @tonybnya
"""

from rest_framework.serializers import ModelSerializer # type: ignore
from quicknotes.models import Note


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'title', 'content']