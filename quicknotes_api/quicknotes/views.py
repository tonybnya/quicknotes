"""
Script Name : views.py
Description : Define the viewsets
Author      : @tonybnya
"""

from .models import Collection, Note
from django.contrib.auth.models import User
from django.http import HttpResponse, JsonResponse # type: ignore
from quicknotes.serializers import CollectionSerializer, CollectionWithNotesSerializer, NoteSerializer, UserSerializer
from rest_framework import status
from rest_framework.decorators import action, api_view, authentication_classes, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response # type: ignore
from rest_framework.viewsets import ModelViewSet # type: ignore
from rest_framework_simplejwt.tokens import RefreshToken


def home(request):
    return HttpResponse("Quicknotes API")


@api_view(["POST"])
@authentication_classes([])
@permission_classes([AllowAny])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user: User = serializer.save() # type: ignore

        refresh = RefreshToken.for_user(user)
        access = refresh.access_token

        return Response(
            {
                "user": UserSerializer(user).data,
                "refresh": str(refresh),
                "access": str(access)
            },
            status=status.HTTP_201_CREATED
        )
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class NoteViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def get_queryset(self):
        qs = Note.objects.filter(user=self.request.user).select_related("collection")
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

    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        return serializer.save(user=self.request.user)


class CollectionViewSet(ModelViewSet):
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer

    def get_queryset(self):
        return Collection.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        return serializer.save(user=self.request.user)

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
        collection = Collection.objects.prefetch_related("notes").filter(user=self.request.user).get(pk=pk)
        # serializer = CollectionSerializer(collection)
        # serializer_notes = NoteSerializer(collection.notes, many=True) # type: ignore
        # return Response({'data': {**dict(serializer.data), 'notes': serializer_notes.data}})
        serializer = CollectionWithNotesSerializer(collection)
        return Response({'data': serializer.data})
