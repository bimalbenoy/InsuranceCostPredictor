import React from 'react';
import useInsuranceStore from '../store/useInsuranceStore';

const InsuranceForm = () => {
  const { form, setFormValue, submitForm, loading } = useInsuranceStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue(name, parseFloat(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Age:</label>
      <input name="age" type="number" value={form.age} onChange={handleChange} />

      <label>Sex:</label>
      <select name="sex" value={form.sex} onChange={handleChange}>
        <option value={0}>Female</option>
        <option value={1}>Male</option>
      </select>

      <label>BMI:</label>
      <input name="bmi" type="number" step="0.01" value={form.bmi} onChange={handleChange} />

      <label>Children:</label>
      <input name="children" type="number" value={form.children} onChange={handleChange} />

      <label>Smoker:</label>
      <select name="smoker" value={form.smoker} onChange={handleChange}>
        <option value={0}>Yes</option>
        <option value={1}>No</option>
      </select>

      <label>Region:</label>
      <select name="region" value={form.region} onChange={handleChange}>
        <option value={0}>Southeast</option>
        <option value={1}>Southwest</option>
        <option value={2}>Northeast</option>
        <option value={3}>Northwest</option>
      </select>

      <button type="submit" disabled={loading}>
        {loading ? 'Predicting...' : 'Predict'}
      </button>
    </form>
  );
};

export default InsuranceForm;

