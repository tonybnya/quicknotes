"""
Script Name : serializers.py
Description : Serialize the model viewsets - convert the model to JSON and vice-versa
Author      : @tonybnya
"""

from rest_framework.serializers import ModelSerializer # type: ignore
from quicknotes.models import Collection, Note


class CollectionSerializer(ModelSerializer):
    class Meta:
        model = Collection
        fields = "__all__"


class NoteSerializer(ModelSerializer):
    collection_data = CollectionSerializer(source="collection", read_only=True)
    # collection = CollectionSerializer()
    class Meta:
        model = Note
        fields = "__all__"