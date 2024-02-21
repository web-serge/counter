import {InputHTMLAttributes} from 'react';
import './input.css'

type InputType = {
    text: string
} & InputHTMLAttributes<HTMLInputElement>
export const Input = ({text, ...props}: InputType) => {
    return (
        <div className='input-box'>
            <input {...props} required={true}/>
            <label>{text}</label>
        </div>
    );
}