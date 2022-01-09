import React from 'react';
import s from './Display.module.css'

type DisplayPropsType={
    count:number
}

export const Display=(props:DisplayPropsType)=>{
    return(
   <div className={ props.count ===5? s.red_count : s.count_wrapper}>{props.count}
   </div>

    )
}