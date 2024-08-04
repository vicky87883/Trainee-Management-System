from dataclasses import field, fields
from pyexpat import model
from rest_framework import serializers
from .models import *


class ChartdatatableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chartdatatable
        fields = '__all__'


class EducationtableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education_table
        fields = '__all__'


class PdftableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pdf_table
        fields = '__all__'
