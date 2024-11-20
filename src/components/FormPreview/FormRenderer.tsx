import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Field {
  id: string;
  type: string;
  label: string;
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

interface FormRendererProps {
  fields: Field[];
}

const FormRenderer: React.FC<FormRendererProps> = ({ fields }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          {field.type === "text" || field.type === "email" ? (
            <input
              id={field.id}
              {...register(field.id, { required: field.required })}
              placeholder={field.placeholder}
            />
          ) : field.type === "select" ? (
            <select {...register(field.id, { required: field.required })}>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : null}
          {errors[field.id] && <p>{field.label} is required</p>}
        </div>
      ))}
      
      <button type="submit"> Submit</button>
    </form>
  );
};

export default FormRenderer;
