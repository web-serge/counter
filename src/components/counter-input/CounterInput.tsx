import React from 'react';
import {Input} from '../input/Input';
import {Button} from '../button/Button';
import './counter-input.css'
import {CountType} from '../../App';

export type OptionsType = {
    changeCount: (key: keyof CountType, newValue: number) => void
    max: number
    min: number
    toggleOptions: () => void
    confirmOptions: () => void
    isError: boolean
}
export const CounterInput = ({changeCount, max, min, toggleOptions, confirmOptions, isError}: OptionsType) => {
    function setMaxCount(value: string) {
        changeCount('max', +value)
    }
    function setMinCount(value: string) {
        changeCount('min', +value)
    }

    return (
        <div className='options'>
            <Input type='number'
                   value={max}
                   text={'max value'}
                   onChange={setMaxCount}
                   className={isError ? 'error' : ''}/>
            <Input value={min}
                   onChange={setMinCount}
                   type='number'
                   text={'min value'}
                   className={isError ? 'error' : ''}/>
            <Button onClick={confirmOptions}
                    name='Confirm'
                    icon="fa-duotone fa-check"
                    title='Confirm'
                    disabled={isError}/>
            <Button onClick={toggleOptions} icon={"fa-duotone fa-xmark"} className='close'/>
        </div>
    );
}
