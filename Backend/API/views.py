from django.db.models import Max
from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets

class ChartdatatableViewSet(viewsets.ModelViewSet):
    serializer_class = ChartdatatableSerializer
    queryset = Chartdatatable.objects.all()


class EducationtableViewSet(viewsets.ModelViewSet):
    serializer_class = EducationtableSerializer
    queryset = Education_table.objects.all()


class PdftableViewSet(viewsets.ModelViewSet):
    serializer_class = PdftableSerializer
    queryset = Pdf_table.objects.all()