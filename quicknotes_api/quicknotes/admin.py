from django.contrib import admin # type: ignore
from .models import Collection, Note


class CustomCollectionAdmin(admin.ModelAdmin):
    list_display = ('name', 'user', 'id')
    readonly_fields = ('id',)


admin.site.register(Note)
admin.site.register(Collection, CustomCollectionAdmin)