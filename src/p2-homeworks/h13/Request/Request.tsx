import React, {ChangeEvent, useState} from "react";
import s from "./Request.module.css"
import {api} from "./api";

export function Request() {
    const [checked, setChecked] = useState(false)
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): any => {
        setChecked(e.currentTarget.checked)
    }
    const onClickHandler = async () => {
        const res = await api.getResponse(checked)
        console.log('res: ', res)
    }
    return <div className={s.container}>
        <input type={'checkbox'} checked={checked} onChange={onChangeCallback}/>
        <button className={s.button} onClick={onClickHandler}>click me</button>
    </div>
}