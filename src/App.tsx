import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";
import {Display} from "./Display";
type NameType='inc'|'reset'

function App() {
    let [count, setCount] = useState(0);


    let btn_inc=()=> count < 5 ? setCount(count + 1): count;
    let btn_reset=()=> count>0 ?  setCount( count=0): count;

const disabledInc= count===5;
    const disabledReset= count===0;


    return (
        <div className="App">
            <div className="display_wrapper">
                <Display count={count}/>
            </div>
            <div className="btn_wrapper">
                <Button name='inc' callback={btn_inc} disabled={disabledInc}/>
                <Button name='reset' callback={btn_reset} disabled={disabledReset}/>
            </div>
        </div>
    )
}

export default App;
