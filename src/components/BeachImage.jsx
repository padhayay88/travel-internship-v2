import React from 'react';

const BeachImage = () => {
  return (
    <div className="p-4 flex justify-center items-center">
      <img
        src="/beach.jpg"
        alt="Beautiful Beach Waterfall"
        className="w-full max-w-[600px] rounded-2xl shadow-lg object-cover"
      />
    </div>
  );
};

export default BeachImage;
