"""
Script Name : views.py
Description : Define the viewsets
Author      : @tonybnya
"""

from django.http import HttpResponse, JsonResponse # type: ignore
from rest_framework.viewsets import ModelViewSet # type: ignore
from quicknotes.serializers import NoteSerializer
from .models import Note


def home(request):
    return HttpResponse("Quicknotes API")


class NoteViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
