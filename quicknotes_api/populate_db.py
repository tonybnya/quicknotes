"""
Script Name : populate_db.py
Description : Populate SQLite database with Faker test data
Author      : @tonybnya
"""

import os
import django
from faker import Faker

# 1. Configure Django settings
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "quicknotes.settings")
django.setup()

# 2. ONLY NOW import Django models
from django.contrib.auth.models import User
from quicknotes.models import Collection, Note


NUM_COLLECTIONS = 5
NOTES_PER_COLLECTION = 10

fake = Faker()


def get_or_create_test_user() -> User:
    user, _ = User.objects.get_or_create(
        username="testuser",
        defaults={"email": "testuser@example.com"},
    )
    user.set_password("testpassword")
    user.save()
    return user


def create_collections(user: User, num: int) -> list[Collection]:
    collections: list[Collection] = []

    for _ in range(num):
        collections.append(
            Collection.objects.create(
                name=fake.word().capitalize(),
                user=user,
            )
        )

    return collections


def create_notes(user: User, collection: Collection, num: int) -> None:
    for _ in range(num):
        Note.objects.create(
            title=fake.sentence(nb_words=6),
            content=fake.paragraph(nb_sentences=5),
            collection=collection,
            user=user,
        )


def populate() -> None:
    print("Clearing existing data...")
    Note.objects.all().delete()
    Collection.objects.all().delete()

    print("Creating test user...")
    user = get_or_create_test_user()

    print("Creating collections...")
    collections = create_collections(user, NUM_COLLECTIONS)

    print("Creating notes...")
    for collection in collections:
        create_notes(user, collection, NOTES_PER_COLLECTION)

    print("Database populated successfully!")


if __name__ == "__main__":
    populate()
