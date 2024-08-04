from API.views import *
from rest_framework.routers import DefaultRouter
from API import views

router = DefaultRouter()
router.register(r'Chartdatatable', views.ChartdatatableViewSet)
router.register(r'Education_table', views.EducationtableViewSet)
router.register(r'Pdf_table', views.PdftableViewSet)

urlpatterns = router.urls