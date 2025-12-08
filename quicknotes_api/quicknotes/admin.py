from django.contrib import admin # type: ignore
from .models import Note

admin.site.register(Note)
