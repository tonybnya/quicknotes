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
