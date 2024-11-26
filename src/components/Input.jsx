import React from "react";

const Input = ({
    label,
    type,
    name,
    value,
    onChange,
    placeholder = '',
    required = false,
    className = '',
}) => {
    return (
        <div className={`mb-4 ${className}`}>
            {label && (
                <label htmlFor={name} className="block text-sm font-medium text-gray-600 mb-1">
                    {label}
                </label>
            )}
            <input 
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
        </div>
    )
}

export default Input