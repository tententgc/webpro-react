import React from "react";

const Nopage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-600">
      <h1 className="text-6xl font-bold text-white">404</h1>
      <p className="text-xl font-medium text-white">Page Not Found</p>
    </div>
  );
};

export default Nopage;
