import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterFull} from './components/CounterFull';

export type CountType = {
    current: number
    max: number
    min: number
}


function App() {
    // состояния для скрытия настроек
    const [isOptions, setIsOptions] = useState(false)
    // отслеживание некорректных данных
    const [isError, setIsError] = useState(false)
    // local state {}
    const [count, setCount] = useState<CountType>({
        current: 0,
        max: 5,
        min: 0
    })

    // получаем данные с localStorage при первом рендере
    useEffect(() => {
        let current = localStorage.getItem('currentCount')
        let max = localStorage.getItem('maxCount')
        let min = localStorage.getItem('minCount')
        if (current && max && min) {
            setCount({
                ...count,
                current: JSON.parse(current),
                min: JSON.parse(min),
                max: JSON.parse(max)
            })
        }
    }, []);

    useEffect(() => {
        // Проверяем значения min/max и устанавливаем isError
        setIsError(count.min < 0 || count.max < 0 || count.max <= count.min);
        // записываем данные в localStorage
        localStorage.setItem('currentCount', JSON.stringify(count.current))
        localStorage.setItem('maxCount', JSON.stringify(count.max))
        localStorage.setItem('minCount', JSON.stringify(count.min))
    }, [count]);

    // show or hide counter-input
    function toggleOptions() {
        setIsOptions(!isOptions)
    }

    // ф-ия для работы с инпутами
    function changeCount(key: keyof CountType, newValue: number) {
        setCount({
            ...count,
            [key]: newValue
        })
    }

    function confirmOptions() {
        if (!isError) {
            setCount({...count, current: count.min})
        }
    }

    return (
        <div className='App'>
            <CounterFull title='Counter #1'
                         current={count.current}
                         max={count.max}
                         min={count.min}
                         toggleOptions={toggleOptions}
                         changeCount={changeCount}
                         isError={isError}
                         isOptions={isOptions}
                         confirmOptions={confirmOptions}/>
        </div>
    );
}

export default App;
