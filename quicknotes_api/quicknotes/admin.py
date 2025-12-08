from django.contrib import admin # type: ignore
from .models import Collection, Note

admin.site.register(Note)
admin.site.register(Collection)