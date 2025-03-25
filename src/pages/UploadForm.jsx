import React, { useEffect } from 'react';

// Sample data for disease detection models
const models = [
  { name: 'Brain Tumor Detection Model' },
  { name: 'Pneumonia Detection Model' },
  { name: 'Diabetes Prediction Model' },
  { name: 'Heart Disease Prediction Model' },
  // Add more models as needed
];

const UploadForm = () => {
  useEffect(() => {
    // Set a timeout to open the back-end route in a new tab after 2 seconds
    const timer = setTimeout(() => {
      window.open('http://localhost:5000', '_blank');
    }, 2000); // 2000 milliseconds = 2 seconds

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-10">
      {/* Table displaying disease detection models */}
      <table className="border-separate border-spacing-2 border border-blue-500 shadow-lg rounded-lg overflow-hidden w-full max-w-md mt-5">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="border border-blue-600 px-4 py-2 text-center">Disease Detection Models</th> {/* Center the text */}
          </tr>
        </thead>
        <tbody className="bg-white text-gray-800">
          {models.map((model, index) => (
            <tr key={index} className="hover:bg-gray-200 transition duration-300">
              <td className="border border-gray-300 px-4 py-2 text-center">{model.name}</td> {/* Center the text */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UploadForm;
