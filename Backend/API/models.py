import uuid

from django.db import models

# Create your models here.
class Chartdatatable(models.Model):
    Rowid=models.AutoField(primary_key=True)
    ReferenceNo = models.UUIDField(default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100, default=None, blank=True, null=True)
    fathername = models.CharField(max_length=100, default=None, blank=True, null=True)
    dob = models.CharField(max_length=50, default=None, blank=True, null=True)
    statecode = models.CharField(max_length=50, default=None, blank=True, null=True)
    districtcode = models.CharField(max_length=50, default=None, blank=True, null=True)
    sector = models.CharField(max_length=100, default=None, blank=True, null=True)
    mobile = models.CharField(max_length=20, default=None, blank=True, null=True)
    emailid = models.CharField(max_length=50, default=None, blank=True, null=True)
    gender = models.CharField(max_length=10, default=None, blank=True, null=True)
    address = models.CharField(max_length=200, default=None, blank=True, null=True)
    isactive = models.CharField(max_length=20, default=None, blank=True, null=True)
    createdby = models.CharField(max_length=100, default=None, blank=True, null=True)
    createddate = models.CharField(max_length=100, default=None, blank=True, null=True)
    updatedby = models.CharField(max_length=100, default=None, blank=True, null=True)
    updatedon = models.CharField(max_length=100, default=None, blank=True, null=True)
    class Meta:
        # managed = False
        db_table = 'chartdatatable'



class Education_table(models.Model):
    Rowid=models.AutoField(primary_key=True)
    ReferenceNo = models.UUIDField(default=uuid.uuid4, editable=False)
    coursename = models.CharField(max_length=100, default=None, blank=True, null=True)
    year = models.CharField(max_length=100, default=None, blank=True, null=True)
    Degree = models.CharField(max_length=50, default=None, blank=True, null=True)
    institutionname = models.CharField(max_length=50, default=None, blank=True, null=True)
    boardname = models.CharField(max_length=50, default=None, blank=True, null=True)
    marks = models.CharField(max_length=100, default=None, blank=True, null=True)
    createdby = models.CharField(max_length=20, default=None, blank=True, null=True)
    createddate = models.CharField(max_length=50, default=None, blank=True, null=True)
    updatedby = models.CharField(max_length=10, default=None, blank=True, null=True)
    updatedon = models.CharField(max_length=200, default=None, blank=True, null=True)

    class Meta:
        # managed = False
        db_table = 'education_table'

class Pdf_table(models.Model):
    def nameFile(instance,filename):
        return '/'.join(['images',str(instance.name),filename])
    Rowid=models.AutoField(primary_key=True)
    ReferenceNo = models.UUIDField(default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100, default=None, blank=True, null=True)
    dob_pdf = models.FileField(upload_to=nameFile, blank=True,)
    address_pdf = models.FileField(upload_to=nameFile, blank=True)
    collage_request_letter = models.FileField(upload_to=nameFile, blank=True)
    createdby = models.CharField(max_length=20, default=None, blank=True, null=True)
    createddate = models.CharField(max_length=50, default=None, blank=True, null=True)
    updatedby = models.CharField(max_length=10, default=None, blank=True, null=True)
    updatedon = models.CharField(max_length=200, default=None, blank=True, null=True)

    class Meta:
        # managed = False
        db_table = 'pdf_table'