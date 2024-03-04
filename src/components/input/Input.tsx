import {ChangeEvent} from 'react';
import './input.css'

type InputType = {
    text: string
    onChange: (value: string) => void
    type: string
    value: number
    className: string
}
export const Input = ({text, onChange, type, value, className}: InputType) => {
    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        onChange(e.currentTarget.value)
    }
    return (
        <div className='input-box'>
            <input required={true} onChange={onChangeHandler} type={type} value={value} className={className}/>
            <label>{text}</label>
        </div>
    );
}
/////////////////////////////////////////////////
/*import {forwardRef, InputHTMLAttributes} from 'react';
import './input.css'

type InputType = {
    text: string
} & InputHTMLAttributes<HTMLInputElement>
export const Input = forwardRef<HTMLInputElement, InputType>(({text, ...props}, maxRef) => {
    return (
        <div className='input-box'>
            <input {...props} required={true} ref={maxRef}/>
            <label>{text}</label>
        </div>
    );
})*/