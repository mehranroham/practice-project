import React from 'react';

export default function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`flex justify-center items-center  rounded-md px-4 py-2 text-sm md:text-base  transition-colors duration-300 ${
        className ??
        'bg-stone-700 text-stone-300 hover:bg-stone-600 hover:text-stone-200'
      }`}
    >
      {children}
    </button>
  );
}
