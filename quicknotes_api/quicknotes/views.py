"""
Script Name : views.py
Description : Define the viewsets
Author      : @tonybnya
"""

from django.http import HttpResponse, JsonResponse # type: ignore
from rest_framework.viewsets import ModelViewSet # type: ignore
from rest_framework.response import Response # type: ignore
from rest_framework.decorators import action
from quicknotes.serializers import CollectionSerializer, CollectionWithNotesSerializer, NoteSerializer
from .models import Collection, Note


def home(request):
    return HttpResponse("Quicknotes API")


class NoteViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def get_queryset(self):
        qs = Note.objects.select_related("collection")
        print(self.request.query_params) # type: ignore
        collection_id = self.request.query_params.get("collection_id") # type: ignore
        if collection_id:
            qs = qs.filter(collection_id=collection_id)
        return qs.order_by("id")

    # def list(self, request, *args, **kwargs):
    #     queryset = self.filter_queryset(self.get_queryset())
    #     serializer = self.get_serializer(queryset, many=True)
    #     return Response({'data': serializer.data})

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response({'data': serializer.data})


class CollectionViewSet(ModelViewSet):
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response({"data": serializer.data})
    
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response({"data": serializer.data})

    @action(detail=True, methods=["GET"]) 
    def notes(self, request, pk=None):
        # data = Note.objects.filter(collection_id=pk)
        # serializer = NoteSerializer(data, many=True)
        collection = Collection.objects.prefetch_related("notes").get(pk=pk)
        # serializer = CollectionSerializer(collection)
        # serializer_notes = NoteSerializer(collection.notes, many=True) # type: ignore
        # return Response({'data': {**dict(serializer.data), 'notes': serializer_notes.data}})
        serializer = CollectionWithNotesSerializer(collection)
        return Response({'data': serializer.data})
