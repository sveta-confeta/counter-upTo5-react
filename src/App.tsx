import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./Button";
import {Display} from "./Display";
type NameType='count'|'reset'

function App() {
    let [count, setCount] = useState(0);


    let btn_count=()=> count<5 ? setCount(count + 1): count;
    let btn_reset=()=> count>0 ?  setCount( count=0): count;




    return (
        <div className="App">
            <div className="display_wrapper">
                <Display count={count}/>
            </div>
            <div className="btn_wrapper">
                <Button name='count' callback={btn_count}/>
                <Button name='reset' callback={btn_reset}/>
            </div>
        </div>
    )
}

export default App;
