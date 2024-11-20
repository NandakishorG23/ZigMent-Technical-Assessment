
import React, { useState } from "react";
import JsonEditor from "../components/JsonEditor";
import DynamicForm from "../components/DynamicForm";

const HomePage: React.FC = () => {
  const [schema, setSchema] = useState<any>({});

  return (
    <div className="flex h-screen">
      {/* Left side: JSON Editor */}
      <div className="w-full lg:w-1/2 p-4 bg-gray-100 dark:bg-gray-800">
        <JsonEditor onJsonChange={setSchema} />
      </div>

      {/* Right side: Dynamic Form Preview */}
      <div className="w-full lg:w-1/2 p-4 bg-white dark:bg-gray-900">
        <DynamicForm schema={schema} />
      </div>
    </div>
  );
};

export default HomePage;
