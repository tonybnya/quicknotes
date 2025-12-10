"""
Script Name : populate_db.py
Description : Populate SQLite database with Faker test data
Author      : @tonybnya
"""

import os
import django
import random
from faker import Faker

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "quicknotes.settings")
django.setup()

from quicknotes.models import Collection, Note

NUM_COLLECTIONS = 5
NOTES_PER_COLLECTION = 10

fake = Faker()


def create_collections(num: int) -> list[Collection]:
    collections = []
    for _ in range(num):
        c = Collection.objects.create(
            name=fake.word().capitalize()
        )
        collections.append(c)
    return collections


def create_notes(collection: Collection, num: int) -> None:
    for _ in range(num):
        Note.objects.create(
            title=fake.sentence(nb_words=6),
            content=fake.paragraph(nb_sentences=5),
            collection=collection,
        )


def populate() -> None:
    print("Clearing existing data...")
    Note.objects.all().delete()
    Collection.objects.all().delete()

    print("Creating collections...")
    collections = create_collections(NUM_COLLECTIONS)

    print("Creating notes...")
    for collection in collections:
        create_notes(collection, NOTES_PER_COLLECTION)

    print("Database populated successfully!")


if __name__ == "__main__":
    populate()
