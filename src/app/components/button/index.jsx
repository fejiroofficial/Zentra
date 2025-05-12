import React from 'react';

const Button = ({ clickHandler, children, className }) => {
    return (
        <button onClick={clickHandler} className={className}>
            {children}
        </button>
    );
};

export default Button;

