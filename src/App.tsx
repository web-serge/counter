import React, {useState} from 'react';
import './App.css';
import {Options} from './components/options/Options';
import {Screen} from './components/screen/Screen';

function App() {
    const [options, setOptions] = useState(false)

    function showOrHideOptions() {
        setOptions(!options)
    }

    return (
        <>
            <div className="App">
                <Screen showOrHideOptions={showOrHideOptions}/>
                {options && <Options/>}
            </div>
        </>
    );
}

export default App;
