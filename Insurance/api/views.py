from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView
import numpy as np
import joblib
import os
from .serializers import InsuranceSerializer

# Load the ML model
model_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'Model', 'InsuranceCostPredictor.pkl')
model = joblib.load(model_path)

@method_decorator(csrf_exempt, name='dispatch')
class PredictView(APIView):
    """
    Predicts the insurance cost based on the provided input data.
    Accepts a POST request with JSON and returns prediction.
    """
    def post(self, request):
        serializer = InsuranceSerializer(data=request.data)
        if serializer.is_valid():
            input_data = tuple(serializer.validated_data.values())
            input_array = np.asarray(input_data).reshape(1, -1)
            prediction = model.predict(input_array)
            return Response({'predicted_cost': round(prediction[0], 2)})
        return Response(serializer.errors, status=400)


# React Catch-All View
class FrontendAppView(TemplateView):
    template_name = 'index.html'

    def get(self, request, *args, **kwargs):
        try:
            return super().get(request, *args, **kwargs)
        except Exception:
            return render(request, "index.html")
