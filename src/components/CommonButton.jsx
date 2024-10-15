import React, { memo } from 'react';

const CommonButton = memo(({ className, size, style, state, text, leadingIcon, trailingIcon, children, ...props }) => {
    // Determine the button styles based on the props
    const buttonStyles = `
        ${className} 
        ${size === 'medium' ? 'w-[166px] h-[48px]' : ''} 
        ${style === 'filled' ? 'bg-[#4D4397] opacity-100' : ''} 
        ${state === 'enabled' ? 'cursor-pointer' : 'cursor-not-allowed'} 
        gap-2
    `;

    return (
        <button className={buttonStyles} {...props} disabled={state !== 'enabled'}>
            {leadingIcon && <span className="leading-icon"> {/* Add leading icon here */} </span>}
            {text ? children : null}
            {trailingIcon && <span className="trailing-icon"> {/* Add trailing icon here */} </span>}
        </button>
    );
});

export default CommonButton;
