from django.urls import path
from . import views

urlpatterns = [
    path('', views.ApiOverViewList.as_view()),
    path('task-list/', views.TaskListView.as_view()),
    path('task-detail/<str:pk>', views.TaskDetailView.as_view()),
    path('task-create/', views.TaskCreateView.as_view()),
    path('task-update/<str:pk>', views.TaskUpdateView.as_view()),
    path('task-delete/<str:pk>', views.TaskDeleteView.as_view()),

]
