import React, { useId } from "react";
import PropTypes from 'prop-types'

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", id, ...props },
  ref
) {
  const generatedId = useId();
  const inputId = id || generatedId; // Use provided ID or generate one

  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={inputId} // Ensures unique ID usage
        ref={ref} // Removes duplicate ref assignment
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        {...props} 
      />
    </div>
  );
});

export default Input;
