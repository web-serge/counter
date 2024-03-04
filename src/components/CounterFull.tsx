import {CounterDisplay, ScreenType} from './counter-display/CounterDisplay';
import {CounterInput, OptionsType} from './counter-input/CounterInput';

type CounterFullType = ScreenType & OptionsType & {isOptions: boolean, title: string}
export const CounterFull = ({min, max, current, isError, toggleOptions, changeCount, isOptions, confirmOptions, title}: CounterFullType) => {
    return (
        <>
            <h2>{title}</h2>
            <div className='counter'>
                <CounterDisplay current={current} max={max} min={min} toggleOptions={toggleOptions}
                                changeCount={changeCount} isError={isError}/>
                {isOptions && <CounterInput changeCount={changeCount} max={max} min={min} toggleOptions={toggleOptions}
                                            confirmOptions={confirmOptions} isError={isError}/>}
            </div>
        </>
    )
}