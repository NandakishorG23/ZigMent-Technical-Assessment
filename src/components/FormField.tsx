import React from "react";

interface FormFieldProps {
  field: any;
  register: any;
  error: any;
}

const FormField: React.FC<FormFieldProps> = ({ field, register, error }) => {
  return (
    <div className="space-y-2">
      <label className="block font-medium text-gray-700">{field.label}</label>
      {field.type === "text" || field.type === "email" ? (
        <input
          type={field.type}
          placeholder={field.placeholder}
          {...register(field.id, {
            required: field.required && `${field.label} is required`,
            pattern: field.validation?.pattern && {
              value: new RegExp(field.validation.pattern),
              message: field.validation.message,
            },
          })}
          className="input-field"
        />
      ) : field.type === "select" ? (
        <select {...register(field.id)} className="input-field">
          {field.options.map((option: any) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : field.type === "radio" ? (
        field.options.map((option: any) => (
          <label key={option.value} className="flex items-center space-x-2">
            <input type="radio" value={option.value} {...register(field.id)} />
            <span>{option.label}</span>
          </label>
        ))
      ) : (
        <textarea
          placeholder={field.placeholder}
          {...register(field.id)}
          className="input-field"
        />
      )}
      {error && <p className="error-message">{error.message}</p>}
    </div>
  );
};

export default FormField;
