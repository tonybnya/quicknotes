from django.db import models # type: ignore


class Note(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()

    def __str__(self) -> str:
        return self.title

    def __repr__(self) -> str:
        return self.__str__()
