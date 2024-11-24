import React from 'react';

const Button = ({ label, onClick, type = 'button', className = '', variant = 'primary', size = 'md' }) => {
    // Adiciona as classes do Bootstrap para o tipo de botão (variantes como primary, secondary, etc.) e tamanho
    const buttonClass = `btn btn-${variant} btn-${size} ${className}`;

    return (
        <button className={buttonClass} type={type} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
