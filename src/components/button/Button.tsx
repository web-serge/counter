import React, {ButtonHTMLAttributes} from 'react';
import './button.css'

type ButtonType = {
    name?: string
    icon?: string
    onClick: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>
export const Button = ({onClick, icon, name, ...props}: ButtonType) => {
    function onClickHandler() {
        onClick()
    }

    return (
        <button onClick={onClickHandler}
                className={typeof name === 'string' ? 'button-name' : undefined}
                {...props}>
            {name && <span>{name}</span>}
            {icon && <i className={icon}></i>}
        </button>
    );
};