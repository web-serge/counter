import React from 'react';
import {Input} from '../input/Input';
import {Button} from '../button/Button';
import './option.css'

export const Options = () => {
    return (
        <div className='options'>
            <Input type='number' text={'max value'} />
            <Input type='number' text={'min value'}/>
            <Button onClick={() => {}} name='Confirm' icon="fa-duotone fa-check" title='Confirm' />
        </div>
    );
};