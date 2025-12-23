from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from .models import Collection, Note


class RegistrationTests(APITestCase):
    def test_user_registration(self):
        url = reverse("register")
        payload = {
            "username": "tony",
            "email": "tony@example.com",
            "password": "strongpassword123"
        }

        response = self.client.post(url, payload, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn("access", response.data)
        self.assertIn("refresh", response.data)
        self.assertEqual(response.data["user"]["username"], "tony")
        self.assertEqual(User.objects.count(), 1)


class CollectionTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username="user1",
            password="password123"
        )
        self.client.force_authenticate(user=self.user)

    def test_create_collection(self):
        url = reverse("collection-list")
        payload = {"name": "Work notes"}

        response = self.client.post(url, payload, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Collection.objects.count(), 1)
        self.assertEqual(Collection.objects.first().user, self.user)
