from django.http import HttpResponse, JsonResponse # type: ignore
from .models import Note


def home(request):
    return HttpResponse("Quicknotes API")


def notes(request):
    data = list(Note.objects.values())
    return JsonResponse({'notes': data})
