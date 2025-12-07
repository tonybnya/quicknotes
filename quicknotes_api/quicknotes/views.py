"""
Script Name : views.py
Description : Define the viewsets
Author      : @tonybnya
"""

from django.http import HttpResponse, JsonResponse # type: ignore
from rest_framework.viewsets import ModelViewSet # type: ignore
from rest_framework.response import Response # type: ignore
from quicknotes.serializers import NoteSerializer
from .models import Note


def home(request):
    return HttpResponse("Quicknotes API")


class NoteViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def list(self, request):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response({'data': serializer.data})

    def retrieve(self, request):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response({'data': serializer.data})
