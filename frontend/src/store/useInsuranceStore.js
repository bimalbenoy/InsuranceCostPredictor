import { create } from "zustand";
import axios from "axios";

const useInsuranceStore = create((set) => ({
  form: {
    age: "",
    sex: 0,
    bmi: "",
    children: "",
    smoker: 0,
    region: 0,
  },
  prediction: null,
  loading: false,
  error: null,

  setFormValue: (field, value) =>
    set((state) => ({
      form: { ...state.form, [field]: value },
    })),

  submitForm: async () => {
    set({ loading: true, error: null });
    try {
      const { form } = useInsuranceStore.getState();
      const response = await axios.post(
        "http://127.0.0.1:8000/api/predict/",
        form,
        {
          headers: {
            "Content-Type": "application/json", // 👈 This is enough
          },
        }
      );
      set({ prediction: response.data.predicted_cost });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useInsuranceStore;
