import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";
import {Display} from "./Display";
import Input from "./Input";

function App() {
    let [count, setCount] = useState(0);


    // let btn_inc=()=> count < 5 ? setCount(count + 1): count;
    let btn_reset=()=> count>0 ?  setCount( count=0): count;

const disabledInc= count===5;
    const disabledReset= count===0;


    const callbackInputMax=(value:number)=>{
         count < value ? setCount(count + 1): count;

    }

    const callbackInputStart=(value:number)=>{
        count=value;
     setCount(count+1);

    }


    return (
        <div className="app_wrapper">
        <div className="App one">
            <div className="display_wrapper">
                <div className="max">max value: <Input callbackInput={callbackInputMax} /></div>
                <div className="start">start value: <Input callbackInput={callbackInputStart}/></div>

            </div>
            <div className="btn_wrapper_one">
                <Button name='set' callback={} disabled={disabledInc}/>

            </div>
        </div>
            <div className="App two">
                <div className="display_wrapper">
                    <Display count={count}/>
                </div>
                <div className="btn_wrapper">
                    <Button name='inc' callback={btn_inc} disabled={disabledInc}/>
                    <Button name='reset' callback={btn_reset} disabled={disabledReset}/>
                </div>
            </div>
        </div>
    )
}

export default App;
