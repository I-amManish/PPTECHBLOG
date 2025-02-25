import { useId, forwardRef } from "react";

const Select = forwardRef(({ options, label, className = "", ...props }, ref) => {
    const id = useId(); // Call useId properly

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className={`block mb-1 text-sm font-medium ${className}`}>
                    {label}
                </label>
            )}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border-gray-200 w-full ${className}`}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
});

// info: debugging purposes only
// Select.displayName = "Select";

export default Select;
