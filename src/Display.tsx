import React from 'react';
import s from './Display.module.css'

type DisplayPropsType={
    count:number
}

export const Display=(props:DisplayPropsType)=>{
    return(
   <div className={s.count_wrapper}>{props.count}
   </div>

    )
}