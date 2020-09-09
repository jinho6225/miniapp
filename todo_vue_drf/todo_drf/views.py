from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import TaskSerializer
from .models import Task

# Create your views here.


class ApiOverViewList(APIView):
    def get(self, request, format=None):
        api_urls = {
            'List': '/task-list',
            'Detail': '/task-detail/<str:pk>',
            'Create': '/task-create/',
            'Update': '/task-update/<str:pk>',
            'Delete': '/task-delete/<str:pk>',
        }
        return Response(api_urls)

class TaskListView(APIView):
    def get(self, request, format=None):
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

class TaskDetailView(APIView):
    def get_object(self, pk):
        try:
            return Task.objects.get(pk=pk)
        except Task.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        task = self.get_object(pk)
        serializer = TaskSerializer(task)
        return Response(serializer.data)

class TaskCreateView(APIView):
    def post(self, request, format=None):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TaskUpdateView(APIView):
    def put(self, request, pk, format=None):
        task = Task.objects.get(pk=pk)
        serializer = TaskSerializer(instance=task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TaskDeleteView(APIView):
    def delete(self, request, pk, format=None):
        task = Task.objects.get(pk=pk)
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)