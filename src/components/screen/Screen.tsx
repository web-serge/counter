import React from 'react';
import {Button} from '../button/Button';
import './screen.css'

type ScreenType = {
    showOrHideOptions: () => void
}
export const Screen = ({showOrHideOptions}: ScreenType) => {
    return (
        <div className='screen'>
            <small>Enter values and press 'confirm'</small>
        <div className={'button-row'}>
            <Button onClick={() => {}} icon="fa-sharp fa-solid fa-plus" title='Plus' />
            <Button onClick={() => {}} icon="fa-regular fa-arrow-rotate-left" title='Reset'/>
            <Button onClick={showOrHideOptions} icon="fa-duotone fa-gears" title='Set' />
        </div>
        </div>
    );
};

