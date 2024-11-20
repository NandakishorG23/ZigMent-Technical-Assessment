// src/context/FormContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your context data
interface FormContextType {
  formData: any;
  setFormData: (data: any) => void;
}

// Create the context
const FormContext = createContext<FormContextType | undefined>(undefined);

// Provider component
const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState({});

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook for accessing the context
const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

// Export the provider and hook
export { FormProvider, useFormContext };
