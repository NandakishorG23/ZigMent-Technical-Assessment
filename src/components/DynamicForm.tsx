import React from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";

interface DynamicFormProps {
  schema: any;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  if (!schema.fields) {
    return <p className="text-gray-500">Define a schema to generate the form.</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container space-y-6">
      <h1 className="form-title">{schema.formTitle || "Untitled Form"}</h1>
      <p className="form-description">{schema.formDescription || ""}</p>
      {schema.fields.map((field: any) => (
        <FormField
          key={field.id}
          field={field}
          register={register}
          error={errors[field.id]}
        />
      ))}
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
