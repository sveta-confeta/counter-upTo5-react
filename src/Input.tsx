import React, {ChangeEvent, useState} from 'react';
import s from './Input.module.css'


type InputPropsType={
callbackInput:(value:number)=>void
}

const Input = (props:InputPropsType) => {
    let [valueInput,setValueInput]=useState(0);
    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        setValueInput(+event.currentTarget.value);
        props.callbackInput(valueInput);

    }
    return (
        <div>
            <input className={s.red} type='number' onInput={onChangeHandler} value={valueInput}/>
        </div>
    );
};

export default Input;