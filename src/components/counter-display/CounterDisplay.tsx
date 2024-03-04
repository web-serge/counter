import React from 'react';
import {Button} from '../button/Button';
import './counter-display.css'
import {CountType} from '../../App';

export type ScreenType = {
    current: number
    max: number
    min: number
    toggleOptions: () => void
    changeCount: (key: keyof CountType, newValue: number) => void
    isError: boolean
}
export const CounterDisplay = (props: ScreenType) => {
    const {toggleOptions, current, max, changeCount, isError, min} = props

    function incCount() {
        if (current > max) return
        changeCount('current', current + 1)
    }

    function resetCount() {
        changeCount('current', min)
    }

    return (
        <div className='screen'>
            {!isError && <strong className={current >= max ? 'active' : ''}>{current}</strong>}
            {current > max && max > min && <small>Click 'Confirm' to continue</small>}
            {min < 0 && <small>MIN should be more zero</small>}
            {min > current && min < max && <small>Click 'Confirm' to continue</small>}
            {min >= max && <small className='active'>Incorrect data</small>}
            {current === max && !isError && <small>You have the maximum value.</small>}

            <div className={'button-row'}>
                <Button onClick={incCount}
                        disabled={current >= max || current < min || isError}
                        icon="fa-duotone fa-arrow-up-9-1"
                        title='Count++'/>
                <Button onClick={resetCount}
                        icon="fa-regular fa-arrow-rotate-left"
                        title='Reset count'
                        disabled={current === min || isError}/>
                <Button onClick={toggleOptions}
                        icon="fa-duotone fa-gears"
                        title='Toggle options'/>
            </div>
        </div>
    );
};

