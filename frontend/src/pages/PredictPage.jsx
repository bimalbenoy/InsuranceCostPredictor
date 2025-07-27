import React from 'react';
import useInsuranceStore from '../store/useInsuranceStore';
import InsuranceForm from '../components/InsuranceForm';
import './PredictPage.css';

const PredictPage = () => {
  const { prediction, error } = useInsuranceStore();

  return (
    <div className="app-container">
      <h2>Insurance Cost Predictor</h2>
      <InsuranceForm />

      {prediction && <div className="result">Predicted Cost: ${prediction}</div>}
      {error && <div className="error">Error: {error}</div>}
    </div>
  );
};

export default PredictPage;
