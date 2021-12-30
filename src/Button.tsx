import React from 'react';
import s from './Button.module.css'
type ButtonPropsType={
    name:string
    callback:()=>void
}


export const Button=(props:ButtonPropsType)=>{
    const buttonHandler=()=>{
        props.callback()}

    return(
        <button className={s.btn} onClick={buttonHandler}>
            {props.name}
        </button>

    )
}
