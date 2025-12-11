"""
Script Name : pagination.py
Description : Custom class to handle pagination
Author      : @tonybnya
"""

from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class CustomPagination(PageNumberPagination):
    def get_paginated_response(self, data):
        return Response({
            'count': self.page.paginator.count,
            'next': self.get_next_link(),
            'prev': self.get_previous_link(),
            'data': data
        })
