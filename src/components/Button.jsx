import React from "react";

const Button = ({
    label,
    onClick,
    type = "button",
    className = "",
    disable = false,
}) => {
    return (
        <button 
            type={type}
            onClick={onClick}
            disabled={disable}
            className={`py-2 px-4 rounded-md shadow-md font-semibold text-white bg-blue-500 hover:bg-blue-600 focus:outeline-none focus:ring focus:ring-blue-300 transition ${className}`}
        
        >
            {label}
        </button>
    )
}
export default Button