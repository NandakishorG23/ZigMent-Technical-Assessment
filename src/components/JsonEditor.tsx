import React, { useState } from "react";

interface JsonEditorProps {
  onJsonChange: (json: any) => void;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ onJsonChange }) => {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target.value;
    try {
      const parsedJson = JSON.parse(input);
      setError(null);
      onJsonChange(parsedJson);
    } catch (err) {
      setError("Invalid JSON format");
    }
  };

  return (
    <div>
      <textarea
        className="w-full h-96 border p-2"
        placeholder="Enter JSON schema here..."
        onChange={handleChange}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default JsonEditor;


