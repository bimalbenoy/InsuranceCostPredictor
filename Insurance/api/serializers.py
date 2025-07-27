from rest_framework import serializers
from .models import Insurance

class InsuranceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Insurance
        fields = '__all__'  # ✅ Proper way to include all model fields
